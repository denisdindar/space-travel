// Main navigation onClick Events
const nav = document.querySelector("#mainNav");
const items = nav.querySelectorAll(".nav__item");
const sections = document.querySelectorAll(".section");

nav.addEventListener("click", function (e) {
  // select to clicked li
  const clicked = e.target.closest(".nav__item");
  //   console.log(clicked);
  // do nothing if clicked area is outside of li
  if (!clicked) return;
  // remove active classes
  items.forEach((all) => {
    all.classList.remove("active");
  });
  // add active class to clicked li
  clicked.classList.add("active");

  // remove all visible sections and show clicked section
  // console.log(clicked.dataset.section);
  sections.forEach((s) => s.classList.remove("visible"));
  document
    .querySelector(`.${clicked.dataset.section}`)
    .classList.add("visible");
});
