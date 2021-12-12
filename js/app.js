// SHORTHANDS
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// SELECTING ELEMENTS
// - change active states on click
// -- main navigation
const navArea = $("#nav");
const navItems = $$(".nav__item");
const navItem = ".nav__item";
// -- destination tabs
const tabArea = $("#tabs");
const tabItems = $$(".tabs__item");
const tabItem = ".tabs__item";
// -- crew dots
const dotArea = $("#dots");
const dotItems = $$(".btn--dots");
const dotItem = ".btn--dots";
// -- technology numbers
const numberArea = $("#numbers");
const numberItems = $$(".btn--numbers");
const numberItem = ".btn--numbers";
// -- section and background
const sections = $$(".section");
const background = $(".bg");
// -- home button to destination tab
const btn = ".btn";
const btnArea = $("#btn");
const sectionDestination = $(".destination");
const sectionDestinationData = $("[data-section='destination']");

// FUNCTIONS
// - Change active state in lists/tabs on clicked
const changeActive = (area, item, items) => {
  area.addEventListener("click", function (e) {
    // select the clicked child
    const clicked = e.target.closest(item);
    console.log(clicked);
    // do nothing if clicked area is outside/false
    if (!clicked) return;
    // remove active classes
    items.forEach((all) => {
      all.classList.remove("active");
    });
    // add active class to clicked child
    clicked.classList.add("active");
  });
};

// - Change sections and backgrounds on clicked
const navigate = (y, area) => {
  area.addEventListener("click", function (e) {
    // select the clicked child
    const clicked = e.target.closest(y);
    if (!clicked) return;
    // remove visibility of sections and add visible to clicked section
    sections.forEach((s) => s.classList.remove("visible"));
    $(`.${clicked.dataset.section}`).classList.add("visible");
    // remove active classes from navigation
    navItems.forEach((all) => {
      all.classList.remove("active");
    });
    // add active class to destination tab (if clicked by main button)
    $("#destination").classList.add("active");
    // change related background on click
    background.classList.remove(
      "bg--destination",
      "bg--crew",
      "bg--technology"
    );
    background.classList.add(`bg--${clicked.dataset.section}`);
  });
};

// - Do navigation
navigate(navItem, navArea);
navigate(btn, btnArea);

// - Change active classes onClick
changeActive(navArea, navItem, navItems);
changeActive(tabArea, tabItem, tabItems);
changeActive(dotArea, dotItem, dotItems);
changeActive(numberArea, numberItem, numberItems);

// FETCHING DATA
// - Reading data from data.json
fetch("./data.json")
  .then((response) => response.json())
  // - Show data
  .then((data) => {
    console.log(data);

    // -- DESTINATION SECTION
    // destination section get data on first load
    function loadDestination(xy) {
      $("[data-animated-content-tabs]").innerHTML = `
    <h2 class="tabs__title anim__focus-in-expand">${data.destinations[xy].name}</h2>
    <p class="tabs__text anim__slide-top">${data.destinations[xy].description}</p>
    <div class="tabs__details anim__tracking-in-expand">
      <div class="tabs__details--distance">
        <span>Avg. Distance</span> ${data.destinations[xy].distance}
      </div>
      <div class="tabs__details--time">
        <span>Est. Travel Time</span> ${data.destinations[xy].travel}
      </div>
    </div>
    `;
      $(".destination__img").innerHTML = `
      <img class="anim__planet" src="${data.destinations[xy].images.png}" alt="${data.destinations[xy].name}" />
      `;
    }
    // call first array on first load (planet moon)
    loadDestination(0);

    // --- selecting tabs
    const tabMoon = $('[data-tab="moon"]'),
      tabMars = $('[data-tab="mars"]'),
      tabEuropa = $('[data-tab="europa"]'),
      tabTitan = $('[data-tab="titan"]');

    // --- function to show data on click
    const onClickDestination = (planet, array) => {
      planet.addEventListener("click", () => {
        // call code block in loadDestination function with array param
        return loadDestination(array);
      });
    };

    // --- create content of all tabs
    // --- numbers below are coming from destinationDefault(array)
    onClickDestination(tabMoon, 0);
    onClickDestination(tabMars, 1);
    onClickDestination(tabEuropa, 2);
    onClickDestination(tabTitan, 3);

    // -- CREW SECTION
    // crew section get data on first load
    function loadCrew(xy) {
      $("[data-animated-content-slides]").innerHTML = `
      <h5 class="crew__job anim__fade-in-left">${data.crew[xy].role}</h5>
      <h3 class="crew__name anim__focus-in-expand">${data.crew[xy].name}</h3>
      <p class="crew__bio anim__fade-in anim__delay--1">
      ${data.crew[xy].bio}
      </p>`;
      $(".crew__img").innerHTML = `
      <img class="anim__swing-in-bottom-fwd" src="${data.crew[xy].images.png}" alt="${data.crew[xy].name}" />
      `;
    }
    // call first array on first load (planet moon)
    loadCrew(0);

    // --- selecting slides
    const slide1 = $('[data-slide="slide-1"]'),
      slide2 = $('[data-slide="slide-2"]'),
      slide3 = $('[data-slide="slide-3"]'),
      slide4 = $('[data-slide="slide-4"]');

    // --- function to show data on click
    const onclickCrew = (planet, array) => {
      planet.addEventListener("click", () => {
        // call code block in loadCrew function with array param
        return loadCrew(array);
      });
    };

    // --- create content of all slides
    // --- numbers below are coming from destinationDefault(array)
    onclickCrew(slide1, 0);
    onclickCrew(slide2, 1);
    onclickCrew(slide3, 2);
    onclickCrew(slide4, 3);

    // -- TECH SECTION
    // crew section get data on first load
    function loadTech(xy) {
      $("[data-animated-content-numbers]").innerHTML = `
      <h5 class="technology__article--sub anim__fade-in-left">Terminology ...</h5>
      <h3 class="technology__article--title anim__focus-in-expand">${data.technology[xy].name}</h3>
      <p class="technology__article--text anim__slide-top">${data.technology[xy].description}</p>
      `;
      $(".technology__img").innerHTML = `
      <picture>
      <source
        media="(max-width:1024px)"
        srcset="${data.technology[xy].images.landscape}"
      />
      <img class="anim__scale-up-hor-right" src="${data.technology[xy].images.portrait}" alt="${data.technology[xy].name}" />
      </picture>
      `;
    }
    // call first array on first load (planet moon)
    loadTech(0);

    // --- selecting bumbers
    const tech1 = $('[data-no="tech-1"]'),
      tech2 = $('[data-no="tech-2"]'),
      tech3 = $('[data-no="tech-3"]');

    // --- function to show data on click
    const onclickTech = (planet, array) => {
      planet.addEventListener("click", () => {
        // call code block in loadTech function with array param
        return loadTech(array);
      });
    };

    // --- create content of all numbers
    // --- numbers below are coming from techDefault(array)
    onclickTech(tech1, 0);
    onclickTech(tech2, 1);
    onclickTech(tech3, 2);
  });

// TOGGLE MENU
const toggleMenu = $(".toggle--menu");
const closeMenu = $(".toggle--close");

toggleMenu.addEventListener("click", () => {
  nav.style.display = "flex";
  closeMenu.style.display = "inline-block";
  toggleMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  nav.style.display = "none";
  closeMenu.style.display = "none";
  toggleMenu.style.display = "none";
});
