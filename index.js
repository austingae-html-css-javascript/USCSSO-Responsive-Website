window.addEventListener("click", function(event) {
  console.log(event.target.id);
  if (event.target.id == "hamburger-logo") {
    document.getElementById("hamburger-menu-page").style.cssText = "top: 0%; transition-property: top; transition-duration: 1s;";
  }
  else if (event.target.id == "x-mark") {
    document.getElementById("hamburger-menu-page").style.cssText = "top: -100%; transition-property: top; transition-duration: 1s;";
  }
});