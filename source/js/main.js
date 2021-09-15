function bindBurgerToggle() {
  var TOGGLE_OPEN_CLASS = "js-open";
  var BUTTON_CROSS = "stick-cross";
  var button = document.querySelector(".main-nav__toggle");
  var menu = document.querySelector(".main-nav__wrapper");

  if (button === "undefined" || menu === "undefined") {
    return;
  }

  button.addEventListener("click", function(event) {
    if (menu.classList.contains(TOGGLE_OPEN_CLASS)) {
      menu.classList.remove(TOGGLE_OPEN_CLASS);
      button.classList.remove(BUTTON_CROSS);
      return;
    }

    menu.classList.add(TOGGLE_OPEN_CLASS);
    button.classList.add(BUTTON_CROSS);
  });
}

function init() {
  bindBurgerToggle();
}

init();
