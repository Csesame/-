let lastUrl = "";
let startTime = Date.now();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active) {
    let endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000;

    if (lastUrl) {
      alert(`前のサイト (${lastUrl}) の閲覧時間: ${timeSpent.toFixed(2)} 秒`);
    }

    lastUrl = tab.url;
    startTime = Date.now();
  }
});
