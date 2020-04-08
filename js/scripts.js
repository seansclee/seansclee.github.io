// set default greeting
const date = new Date();
const timeOfDay = date.getHours();

let greeting =
  timeOfDay < 12
    ? "Hello world, good morning"
    : timeOfDay < 17
    ? "Hello world, afternoon"
    : "Hello world, good evening";

// generate random number to be used for probability
const random = Math.random();

// 'easter egg' greetings; try to guess the reference...
if (random < 0.01) {
  // approx. 1% chance
  greeting = "All your base are belong to us";
} else if (random > 0.01 && random < 0.04) {
  // approx. 3% chance
  greeting = "Code monkey like Tab and Mountain Dew";
} else if (random > 0.04 && random < 0.07) {
  // approx. 3% chance
  greeting = "Hello Mr. Anderson";
} else if (random > 0.1 && random < 0.2) {
  // approx. 10% chance
  greeting = "hello_friend";
} else if (random > 0.99) {
  // approx. 1% chance
  greeting = "I'm a computa";
}

// set greeting
document.getElementById("heading").innerHTML = greeting;
