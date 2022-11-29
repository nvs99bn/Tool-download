let getElements = document?.getElementsByClassName(
  "showcase__link js-detail-data-link"
);
if (getElements) {
  for (let e of getElements) {
    if (e) {
      let linkCollection = e?.getAttribute("href");
      window.open(linkCollection);
    }
  }
}
