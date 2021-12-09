// Main navigation onClick Events
//--------------------------------

// select elements
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

// CTA Button on action
//--------------------------------

// select button
const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {
  // remove and add .visible class to main section
  sections.forEach((s) => s.classList.remove("visible"));
  document.querySelector(".destination").classList.add("visible");

  // remove all active states in navigation and add .active class to destination link
  items.forEach((all) => {
    all.classList.remove("active");
  });
  document
    .querySelector("[data-section='destination']")
    .classList.add("active");
});
