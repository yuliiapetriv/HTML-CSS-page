const nav = document.getElementById("nav");

window.onscroll = function () {
  if (this.scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
};
