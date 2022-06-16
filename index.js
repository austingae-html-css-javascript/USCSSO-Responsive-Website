document.getElementById("hamburger-logo-button").addEventListener("click", function(event) {
  document.getElementById("hamburger-menu-page").style.cssText = "left: 0%; transition-property: left; transition-duration: 1s;";
});

document.getElementById("x-mark").addEventListener("click", function(event) {
  document.getElementById("hamburger-menu-page").style.cssText = "left: -100%; transition-property: left; transition-duration: 1s;";
});