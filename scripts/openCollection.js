// let a = [];
// let getLinks = document
//   ?.querySelectorAll("figure")
//   .forEach((link) => a.push(link?.getAttribute("data-image")));
// localStorage.setItem("links", a);
// let b = [];
// document
//   .querySelectorAll("a > span")
//   .forEach((a) => b.push(a.innerHTML === "Next page"));
// console.log(b)
// let oldData = localStorage.getItem("links").split(",")
let linkNextPage = document
  .getElementsByClassName(
    "pagination__next button floatl pagination--static pd-y-none-i"
  )[0]
  ?.getAttribute("href");
if(linkNextPage){
    window.alert("Hi")
}
