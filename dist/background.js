const panelState = {};

chrome.action.onClicked.addListener((tab) => {
  const winId = tab.windowId;

  if (panelState[winId]) {
    chrome.sidePanel.close({ windowId: winId });
    panelState[winId] = false;
  } else {
    chrome.sidePanel.open({ windowId: winId });
    panelState[winId] = true;
  }
});
