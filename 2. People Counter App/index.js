// document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function decrement() {
  if (count == 0) {
    console.log("You can't go below 0");
  } else {
    count -= 1;
    countEl.textContent = count;
  }
}
let saveel = document.getElementById("save-el");

function save() {
  let savedash = count + " - ";
  saveel.textContent += savedash;
  countEl.textContent = 0;
  count = 0;
}
// Provat

let welcomeEl = document.getElementById("welcome-el");
let emri = "Mikel";
let greeting = "Welcome ";
let myGreeting = greeting + emri;
welcomeEl.innerText = greeting + emri;

welcomeEl.innerText += " :)";
