var menu = document.querySelector(".navbar__menu");
var navbar = document.querySelector(".navbar__container");
var navLinks = document.querySelectorAll(".navbar__link");
var body = document.querySelector("body");
var currentState = menu.dataset.state;

var states = { closed: "CLOSED", opened: "OPENED" };

function onCurrentStateChanged() {
  var updatedState = "";

  if (currentState === states.closed) {
    updatedState = states.opened;
  } else {
    updatedState = states.closed;
  }

  menu.dataset.state = updatedState;
  currentState = updatedState;
  if (currentState === states.closed) {
    navbar.classList.add("expand");
    body.classList.add("no-scroll");
  } else {
    navbar.classList.remove("expand");
    body.classList.remove("no-scroll");
  }
  console.log(currentState);
}

menu.addEventListener("click", function () {
  onCurrentStateChanged();
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    if (window.innerWidth > 768) return;
    console.log("navlink clicked", e);
    e.preventDefault();
    var anchor = document.getElementById(e.target.href.split("#")[1]);
    // anchor.scrollIntoView(true);
    window.scrollTo(
      anchor.getBoundingClientRect().x,
      anchor.getBoundingClientRect().y - window.innerHeight
    );
    console.log(window);
    onCurrentStateChanged();
  });
});
