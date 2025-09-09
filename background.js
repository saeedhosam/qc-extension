chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ windowId: tab.windowId })
})

let calculatorPort = null

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== 'calculator_popup') return
  calculatorPort = port
  port.onDisconnect.addListener(() => {
    if (calculatorPort === port) calculatorPort = null
  })
})

chrome.commands.onCommand.addListener(async (command) => {
  if (command !== 'open_calculator') return

  // If popup is open (port connected), ask it to close (toggle off)
  if (calculatorPort) {
    try { calculatorPort.postMessage({ type: 'CLOSE' }) } catch (e) {}
    return
  }

  // Otherwise open the popup (toggle on)
  try {
    const [activeTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    if (!activeTab || !activeTab.id) return

    await chrome.action.setPopup({ tabId: activeTab.id, popup: 'calculator.html' })
    await chrome.action.openPopup()
  } finally {
    // Reset popup so icon click continues to trigger side panel via onClicked
    try {
      const [activeTab2] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
      if (activeTab2 && activeTab2.id) {
        await chrome.action.setPopup({ tabId: activeTab2.id, popup: '' })
      }
    } catch (e) {}
  }
})