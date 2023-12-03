// selec the contoroling items

const hum__menu = document.querySelector(".menu_icon");
const navigation__menu = document.querySelector(".primary-navigation");

hum__menu.addEventListener("click", () => {
  navigation__menu.classList.toggle("primary-navigation");
  if (navigation__menu.classList.contains("primary-navigation")) {
  } else {
    navigation__menu.style.display = "none";
  }
});
