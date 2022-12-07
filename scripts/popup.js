document.getElementById("start").onclick = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["scripts/getCollectionsURL.js"],
    });
  });
};

document.getElementById("clear").onclick = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["scripts/clearData.js"],
    });
  });
};
