// select elements
const nav = document.querySelector("#mainNav");
const items = nav.querySelectorAll(".nav__item");
const item = ".nav__item";
const tab = document.querySelector("#tabs");
const tabItems = document.querySelectorAll(".tabs__item");
const tabItem = ".tabs__item";
const sections = document.querySelectorAll(".section");
const background = document.querySelector(".bg");
const buttonMain = document.querySelector(".btn--main");
const secDestination = document.querySelector(".destination");
const secDestinationData = document.querySelector(
  "[data-section='destination']"
);
const nmbr = document.querySelector("#numbers");
const nmbrItems = document.querySelectorAll(".btn--numbers");
const nmbrItem = ".btn--numbers";

const dot = document.querySelector("#dots");
const dotItems = document.querySelectorAll(".btn--dots");
const dotItem = ".btn--dots";

// FUNCTION: change active
const changeActive = (ul, li, lis) => {
  ul.addEventListener("click", function (e) {
    // select to clicked li
    const clicked = e.target.closest(li);
    console.log(clicked);
    // do nothing if clicked area is outside of li
    if (!clicked) return;
    // remove active classes
    lis.forEach((all) => {
      all.classList.remove("active");
    });
    // add active class to clicked li
    clicked.classList.add("active");
  });
};

// FUNCTION: change section and background
const changeSection = () => {
  nav.addEventListener("click", function (e) {
    // select to clicked li
    const selected = e.target.closest(".nav__item");
    // console.log(selected);
    // do nothing if selected area is outside of li
    if (!selected) return;
    // remove all visible sections and show selected section
    // console.log(selected.dataset.section);
    sections.forEach((s) => s.classList.remove("visible"));
    document
      .querySelector(`.${selected.dataset.section}`)
      .classList.add("visible");
    // change background
    background.classList.remove(
      "bg--destination",
      "bg--crew",
      "bg--technology"
    );
    background.classList.add(`bg--${selected.dataset.section}`);
  });
};

// FUNCTION: cta buttonMain onClick
const changeCTA = () => {
  buttonMain.addEventListener("click", function (s) {
    // remove and add .visible class to main section
    sections.forEach((s) => s.classList.remove("visible"));
    secDestination.classList.add("visible");

    // remove all active states in navigation and add .active class to destination link
    items.forEach((all) => {
      all.classList.remove("active");
    });
    secDestinationData.classList.add("active");

    // change background
    // change background
    background.classList.remove(
      "bg--destination",
      "bg--crew",
      "bg--technology"
    );
    background.classList.add("bg--destination");
  });
};

// Change sections with backgrounds onClick
changeSection();
// Change Section with background on CTA click
changeCTA();
// Change active classes onClick
changeActive(nav, item, items);
changeActive(tab, tabItem, tabItems);
changeActive(dot, dotItem, dotItems);
changeActive(nmbr, nmbrItem, nmbrItems);

// FETCHING DATA
// ------------------------------
fetch("data.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  });

// tabs test
const tabMoon = document.querySelector("#moon");
const tabMars = document.querySelector("#mars");
const tabEurpa = document.querySelector("#europa");
const tabTitan = document.querySelector("#titan");

let changeTitle = response.destinations[1].name;
tabMars.addEventListener("click", () => {
  document.querySelector(".tabs__title").innerHTML = changeTitle;
});
