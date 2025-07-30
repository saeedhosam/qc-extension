chrome.action.onClicked.addListener(async (tab) => {
  const panel = await chrome.sidePanel.getOptions({ windowId: tab.windowId });
  
  if (panel.enabled) {
    chrome.sidePanel.setOptions({ 
      windowId: tab.windowId, 
      enabled: false 
    });
  } else {
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});