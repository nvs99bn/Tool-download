let linkDownload = document
  ?.getElementById("download-file")
  ?.getAttribute("href");
if (linkDownload) {
  window.open(linkDownload);
}
