// selec the contoroling items

const mobile__toggle = document.querySelector(".mobile-nav-toggle");
const primary__navigation = document.querySelector(".primary-navigation");

mobile__toggle.addEventListener("click", () => {
  const is__visible = primary__navigation.getAttribute("data-visibility");

  if (is__visible === "false") {
    primary__navigation.setAttribute("data-visibility", true);
    mobile__toggle.setAttribute("aria-expanded", true);
  } else {
    primary__navigation.setAttribute("data-visibility", false);
    mobile__toggle.setAttribute("aria-expanded", false);
  }
});
