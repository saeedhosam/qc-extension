chrome.action.onClicked.addListener(async (tab) => {
  // Get the current side panel state
  const options = await chrome.sidePanel.getOptions({ windowId: tab.windowId });

  if (options.enabled) {
    // If currently open, close it
    await chrome.sidePanel.setOptions({
      windowId: tab.windowId,
      enabled: false,
    });
  } else {
    // If currently closed, open it
    await chrome.sidePanel.setOptions({
      windowId: tab.windowId,
      enabled: true,
    });
    await chrome.sidePanel.open({ windowId: tab.windowId });
  }
});
