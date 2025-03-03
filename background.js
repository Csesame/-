let lastUrl = "";
let startTime = Date.now();

chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    let endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000; // 秒単位

    if (lastUrl) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: (url, time) => {
          alert(`前のサイト (${url}) の閲覧時間: ${time.toFixed(2)} 秒`);
        },
        args: [lastUrl, timeSpent]
      });
    }

    lastUrl = details.url;
    startTime = Date.now();
  }
});
