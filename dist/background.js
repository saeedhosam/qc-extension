const panelOpenState = {};

chrome.action.onClicked.addListener((tab) => {
  const windowId = tab.windowId;

  if (panelOpenState[windowId]) {
    chrome.sidePanel.close({ windowId });
    panelOpenState[windowId] = false;
  } else {
    chrome.sidePanel.open({ windowId });
    panelOpenState[windowId] = true;
  }
});
