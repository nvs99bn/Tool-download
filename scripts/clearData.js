if (window.location.pathname.includes("/user/collections/")) {
  if (localStorage.getItem("urls")) {
    localStorage.removeItem("urls");
  }
  alert("Data has been cleared");
}
