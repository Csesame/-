window.addEventListener("beforeunload", () => {
  let endTime = Date.now();
  let timeSpent = (endTime - startTime) / 1000;
  chrome.storage.local.set({ lastSiteTime: timeSpent });
});
