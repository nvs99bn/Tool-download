let linkDownload = document
  ?.getElementById("download-file")
  ?.getAttribute("href");
if (linkDownload) {
  window.open(linkDownload, "_self");
}

let submitLinkDownload = document?.getElementById("submit-download");
if (submitLinkDownload) {
  submitLinkDownload.click();
}
