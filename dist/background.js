chrome.action.onClicked.addListener(async (tab) => {
  const { windowId } = tab;
  const info = await chrome.sidePanel.getPanelBehavior({ windowId });
  if (info.opened) {
    chrome.sidePanel.close({ windowId });
  } else {
    chrome.sidePanel.open({ windowId });
  }
});
