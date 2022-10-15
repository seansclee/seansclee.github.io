// get date
const date = new Date();

// set default greeting
const timeOfDay = date.getHours();

let greeting =
  timeOfDay < 12
    ? "Hello world, good morning"
    : timeOfDay < 17
    ? "Hello world, afternoon"
    : "Hello world, good evening";

// generate random number to be used for probability
const random = Math.random();

// set 'easter egg' greetings; try to guess the reference...
if (random < 0.03) {
  // ~3% chance
  greeting = "All your base are belong to us";
} else if (random > 0.03 && random < 0.1) {
  // ~7% chance
  greeting = "Code monkey like Tab and Mountain Dew";
} else if (random > 0.1 && random < 0.15) {
  // ~5% chance
  greeting = "Hello Mr. Anderson";
} else if (random > 0.16 && random < 0.24) {
  // ~8% chance
  greeting = "Hello, friend";
} else if (random > 0.98) {
  // ~2% chance
  greeting = "I'm a computa";
}

// set greeting in DOM
document.getElementById("heading").innerHTML = greeting;

// set year in DOM
const fullYear = date.getFullYear();
document.getElementById("year").innerHTML = fullYear;

// debounced scroll listener
const scrollButton = document.getElementById("scroll-button");

const applyTopOfPageClass = () => {
  if (
    window.scrollY !== 0 &&
    scrollButton.classList.contains("animate__fadeIn")
  ) {
    scrollButton.classList.remove("animate__fadeIn");
    scrollButton.classList.add("animate__fadeOut");
    setTimeout(() => scrollButton.classList.add("disabled"), 1000);
  } else if (
    window.scrollY === 0 &&
    !scrollButton.classList.contains("animate__fadeIn")
  ) {
    scrollButton.classList.remove("animate__fadeOut", "disabled");
    scrollButton.classList.add("animate__fadeIn");
  }
};

function debounce(callback, interval) {
  let debounceTimeoutId;

  return function (...args) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => callback.apply(this, args), interval);
  };
}

applyTopOfPageClass();
window.addEventListener("scroll", debounce(applyTopOfPageClass, 300));

// find all section elements

const bioSection = document.getElementById("bio");
const workSection = document.getElementById("work");

// add smooth scrolling onclick listener of button

const scrollAnchor = document.querySelector(".scroll-button");

const scrollHandler = (event) => {
  event.preventDefault();
  bioSection.scrollIntoView({ behavior: "smooth" });
};

scrollAnchor.addEventListener("click", scrollHandler);

// add smooth scrolling on nav buttons

const bioNavButton = document.querySelector(".bio");
const workNavButton = document.querySelector(".work");

const bioNavButtonScrollHandler = (event) => {
  event.preventDefault();
  bioSection.scrollIntoView({ behavior: "smooth" });
};

bioNavButton.addEventListener("click", bioNavButtonScrollHandler);

const workNavButtonScrollHandler = (event) => {
  event.preventDefault();
  workSection.scrollIntoView({ behavior: "smooth" });
};

workNavButton.addEventListener("click", workNavButtonScrollHandler);

// add smooth scrolling on work section link in bio

const workSectionLinkInBio = document.querySelector(".work-section-link");

const workSectionLinkInBioScrollHandler = (event) => {
  event.preventDefault();
  workSection.scrollIntoView({ behavior: "smooth" });
};

workSectionLinkInBio.addEventListener(
  "click",
  workSectionLinkInBioScrollHandler
);
