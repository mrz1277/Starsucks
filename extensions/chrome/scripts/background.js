chrome.extension.onRequest.addListener(function (request, sender) {
  if (request === "show_page_action") {
    chrome.pageAction.show(sender.tab.id);
  }
});