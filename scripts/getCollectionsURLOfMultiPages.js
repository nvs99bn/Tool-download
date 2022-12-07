let a = 0;
for (let i of window.location.pathname) {
  if (i === "/") a++;
}
if (a === 5) {
  let urls;
  urls = localStorage.getItem("urls")?.split(",");
  if (urls) {
    let collectionLinks = document?.getElementsByClassName(
      "showcase__link js-detail-data-link"
    );
    for (let collectionLink of collectionLinks) {
      urls.push(collectionLink?.getAttribute("href"));
    }
    localStorage.setItem("urls", urls);
    let linkNextPage = document
      ?.getElementsByClassName("pagination__next button floatl pd-y-none-i")[0]
      ?.getAttribute("href");
    if (linkNextPage) {
      window.open(linkNextPage);
    } else {
      let wrapper = urls.map((url) => {
        return () => {
          return new Promise((resolve) => {
            let collection = window.open(url);
            window.onload = collection;
            window.onload = setTimeout(() => collection.close(), 20000);
            setTimeout(resolve, 2000);
          });
        };
      });
      wrapper.reduce((prev, cur) => {
        return prev.then(cur);
      }, Promise.resolve());
      localStorage.removeItem("urls");
    }
  }
}
