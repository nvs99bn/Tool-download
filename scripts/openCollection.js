let data = localStorage.getItem("data")?.split(",");
if (!data) {
  data = [];
}
let links = document?.getElementsByClassName(
  "showcase__link js-detail-data-link"
);
for (let link of links) {
  data.push(link?.getAttribute("href"));
}
localStorage.setItem("data", data);

let linkNextPage = document
  .getElementsByClassName("pagination__next button floatl pd-y-none-i")[0]
  ?.getAttribute("href");
if (linkNextPage) {
  window.open(linkNextPage);
  window.close(window.location.href);
} else {
  data.forEach((image) => window.open(image))
  localStorage.removeItem("data");
}
