(function() {
  const display = document.getElementById('display')
  let expression = ''

  const port = chrome.runtime.connect({ name: 'calculator_popup' })
  port.onMessage.addListener((msg) => {
    if (msg && msg.type === 'CLOSE') {
      window.close()
    }
  })

  function updateDisplay(text) {
    display.textContent = text || '0'
  }

  function appendToken(token) {
    // Prevent duplicate operators
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
  }

  function clearAll() {
    expression = ''
    updateDisplay(expression)
  }

  function delChar() {
    expression = expression.slice(0, -1)
    updateDisplay(expression)
  }

  function evaluateExpression() {
    try {
      const result = evaluateSafely(expression)
      expression = Number.isFinite(result) ? String(result) : ''
      updateDisplay(expression)
    } catch (e) {
      updateDisplay('Error')
      expression = ''
    }
  }

  // Simple safe evaluator using shunting-yard to RPN and compute
  function evaluateSafely(expr) {
    if (!expr || /[^0-9+\-*/%.]/.test(expr)) throw new Error('invalid')

    // Tokenize: numbers and operators
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
    // Trim floating errors
    return Math.round(out * 1e12) / 1e12
  }

  function handleInput(key) {
    if (key === 'Enter' || key === '=') return evaluateExpression()
    if (key === 'Escape' || key === 'C') return clearAll()
    if (key === 'Backspace' || key === 'DEL') return delChar()
    if ('0123456789'.includes(key)) return appendToken(key)
    if (key === '.') return appendToken('.')
    if (['+', '-', '*', '/', '%'].includes(key)) return appendToken(key)
  }

  document.addEventListener('keydown', (e) => {
    // Allow in-page keyboard usage
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

  updateDisplay('0')
})()
