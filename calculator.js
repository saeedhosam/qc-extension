(function() {
  const display = document.getElementById('display')
  const historyListEl = document.getElementById('historyList')
  const clearHistoryBtn = document.getElementById('clearHistory')
  const copyResultBtn = document.getElementById('copyResult')

  let expression = ''
  let history = [] // [{ expr, res, time }]
  let saveExprTimer = null

  const port = chrome.runtime.connect({ name: 'calculator_popup' })
  port.onMessage.addListener((msg) => {
    if (msg && msg.type === 'CLOSE') {
      window.close()
    }
  })

  function formatWithMinTwoDecimals(value) {
    const n = typeof value === 'number' ? value : parseFloat(value)
    if (!Number.isFinite(n)) return ''
    let s = String(n)
    if (s.includes('e') || s.includes('E')) {
      s = n.toFixed(12)
    }
    if (!s.includes('.')) return s + '.00'
    const parts = s.split('.')
    let dec = parts[1]
    while (dec.length > 2 && dec.endsWith('0')) dec = dec.slice(0, -1)
    if (dec.length < 2) dec = dec.padEnd(2, '0')
    return parts[0] + '.' + dec
  }

  function toTwoFixed(value) {
    const n = typeof value === 'number' ? value : parseFloat(value)
    if (!Number.isFinite(n)) return ''
    return (Math.round(n * 100) / 100).toFixed(2)
  }

  async function loadHistory() {
    try {
      const { calc_history } = await chrome.storage.local.get('calc_history')
      history = Array.isArray(calc_history) ? calc_history : []
      renderHistory()
    } catch (e) {
      history = []
    }
  }

  async function saveHistory() {
    try {
      await chrome.storage.local.set({ calc_history: history })
    } catch (e) {}
  }

  async function loadExpression() {
    try {
      const { calc_expression } = await chrome.storage.local.get('calc_expression')
      expression = typeof calc_expression === 'string' ? calc_expression : ''
      updateDisplay(expression)
    } catch (e) {
      expression = ''
      updateDisplay(expression)
    }
  }

  function scheduleSaveExpression() {
    if (saveExprTimer) clearTimeout(saveExprTimer)
    saveExprTimer = setTimeout(() => {
      chrome.storage.local.set({ calc_expression: expression }).catch(() => {})
    }, 150)
  }

  function renderHistory() {
    if (!historyListEl) return
    historyListEl.innerHTML = ''
    for (let i = history.length - 1; i >= 0; i--) {
      const item = history[i]
      const resDisplay = formatWithMinTwoDecimals(item.res) || ''
      const div = document.createElement('div')
      div.className = 'history-item'
      div.innerHTML = `<div class="history-text"><div class=\"history-expr\">${escapeHtml(item.expr)}</div><div class=\"history-res\">${escapeHtml(resDisplay)}</div></div><button class=\"history-copy-btn\" title=\"Copy\">📋</button>`
      div.querySelector('.history-copy-btn').addEventListener('click', async (ev) => {
        ev.stopPropagation()
        const btn = ev.currentTarget
        const toCopy = toTwoFixed(item.res)
        try {
          await navigator.clipboard.writeText(toCopy)
          const prev = btn.textContent
          btn.textContent = '✅'
          setTimeout(() => { btn.textContent = prev }, 1000)
        } catch (e) {}
      })
      div.addEventListener('click', () => {
        expression = String(resDisplay)
        updateDisplay(expression)
        scheduleSaveExpression()
      })
      historyListEl.appendChild(div)
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  function updateDisplay(text) {
    display.textContent = text || '0'
  }

  function appendToken(token) {
    if ('+-*/%'.includes(token)) {
      if (expression.length === 0) return
      const last = expression[expression.length - 1]
      if ('+-*/%'.includes(last)) {
        expression = expression.slice(0, -1) + token
      } else {
        expression += token
      }
    } else {
      expression += token
    }
    updateDisplay(expression)
    scheduleSaveExpression()
  }

  function clearAll() {
    expression = ''
    updateDisplay(expression)
    scheduleSaveExpression()
  }

  function delChar() {
    expression = expression.slice(0, -1)
    updateDisplay(expression)
    scheduleSaveExpression()
  }

  function evaluateExpression() {
    try {
      const result = evaluateSafely(expression)
      if (expression && Number.isFinite(result)) {
        const formatted = formatWithMinTwoDecimals(result)
        history.push({ expr: expression, res: formatted, time: Date.now() })
        if (history.length > 500) history = history.slice(-500)
        saveHistory()
        renderHistory()
        expression = formatted
      } else {
        expression = ''
      }
      updateDisplay(expression)
      scheduleSaveExpression()
    } catch (e) {
      updateDisplay('Error')
      expression = ''
      scheduleSaveExpression()
    }
  }

  function evaluateSafely(expr) {
    if (!expr || /[^0-9+\-*/%.]/.test(expr)) throw new Error('invalid')

    const tokens = []
    let num = ''
    for (let i = 0; i < expr.length; i++) {
      const ch = expr[i]
      if ((ch >= '0' && ch <= '9') || ch === '.') {
        num += ch
      } else if ('+-*/%'.includes(ch)) {
        if (num === '') throw new Error('op sequence')
        tokens.push(parseFloat(num))
        num = ''
        tokens.push(ch)
      } else {
        throw new Error('bad char')
      }
    }
    if (num !== '') tokens.push(parseFloat(num))

    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 }
    const output = []
    const ops = []

    function applyOp() {
      const op = ops.pop()
      const b = output.pop()
      const a = output.pop()
      switch (op) {
        case '+': output.push(a + b); break
        case '-': output.push(a - b); break
        case '*': output.push(a * b); break
        case '/': output.push(b === 0 ? NaN : a / b); break
        case '%': output.push(b === 0 ? NaN : a % b); break
        default: throw new Error('unknown op')
      }
    }

    for (const t of tokens) {
      if (typeof t === 'number') {
        output.push(t)
      } else {
        while (ops.length && precedence[ops[ops.length - 1]] >= precedence[t]) {
          applyOp()
        }
        ops.push(t)
      }
    }
    while (ops.length) applyOp()

    if (output.length !== 1) throw new Error('eval error')
    const out = output[0]
    return Math.round(out * 1e12) / 1e12
  }

  function handleInput(key) {
    if (key === 'q' || key === 'Q') return clearAll()
    if (key === 'Enter' || key === '=') return evaluateExpression()
    if (key === 'Escape' || key === 'C') return clearAll()
    if (key === 'Backspace' || key === 'DEL') return delChar()
    if ('0123456789'.includes(key)) return appendToken(key)
    if (key === '.') return appendToken('.')
    if (['+', '-', '*', '/', '%'].includes(key)) return appendToken(key)
  }

  document.addEventListener('keydown', (e) => {
    const map = {
      'Enter': 'Enter',
      'Escape': 'C',
      'Backspace': 'Backspace'
    }
    const k = map[e.key] || e.key
    handleInput(k)
  })

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-key]')
    if (!btn) return
    handleInput(btn.getAttribute('data-key'))
  })

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', async () => {
      history = []
      await saveHistory()
      renderHistory()
    })
  }

  if (copyResultBtn) {
    copyResultBtn.addEventListener('click', async () => {
      const text = display.textContent || '0'
      const toCopy = toTwoFixed(text)
      try {
        await navigator.clipboard.writeText(toCopy)
        const prev = copyResultBtn.textContent
        copyResultBtn.textContent = '✅'
        setTimeout(() => { copyResultBtn.textContent = prev }, 1000)
      } catch (e) {}
    })
  }

  loadHistory()
  loadExpression()
})()
