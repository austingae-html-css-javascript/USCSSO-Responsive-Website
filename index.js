document.getElementById("hamburger-logo-button").addEventListener("click", function(event) {
  document.getElementById("hamburger-menu-page").style.cssText = "top: 0%; transition-property: top; transition-duration: 1s;";
});

document.getElementById("x-mark").addEventListener("click", function(event) {
  document.getElementById("hamburger-menu-page").style.cssText = "top: -100%; transition-property: top; transition-duration: 1s;";
});