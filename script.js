var sec = "";

function home() {
  sec = "home";
  scrolls();
}

function services() {
  sec = "services";
  scrolls();
}

function aboutUs() {
  sec = "aboutus";
  scrolls();
}

function image() {
  sec = "image";
  scrolls();
}

function scrolls() {
  var element = document.getElementById(sec);
  element.scrollIntoView();
}
