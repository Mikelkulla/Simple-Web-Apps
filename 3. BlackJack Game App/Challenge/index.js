let person = {
  name: "Mikel",
  age: 5,
  country: "Albania",
};
logData();
function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}
// ##############################################################
// if else statement----------------------------------------------
/* 
let discount = "";
if (person.age < 6) {
  discount = "free";
} else if (person.age >= 6 && person.age <= 17) {
  discount = "Child discount";
} else if (person.age > 17 && person.age <= 26) {
  discount = "Student discount";
} else if (person.age > 26 && person.age <= 66) {
  discount = "Full price";
} else {
  discount = "Senior citizen discount";
}
console.log(discount);
*/

// ##############################################################
// for loop------------------------------------------------------
/*
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

let largestCountries = "The 5 largest countries in the wolrd:";
for (let i = 0; i < largeCountries.length; i++) {
  largestCountries += "\n- " + largeCountries[i];
}
console.log(largestCountries);
*/
// ##############################################################
// push, pop, unshift, shift-------------------------------------
/*let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.shift(); //Heq elementin e pare
largeCountries.unshift("China"); //Shton element ne fillim
largeCountries.pop(); //Heq elementine e fundit
largeCountries.push("Pakistan"); //Shton element ne fund
console.log(largeCountries);*/

// ##############################################################
// Logical Operators
/*let dayOfMonth = 31;
let weekday = "Friday";

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("Spooky Face");
}
*/
// ##############################################################
// Rock Paper Scissors
/*let hands = ["rock", "paper", "scissors"];

function playing() {
  let randomno = Math.floor(Math.random() * 3);
  
  return hands[randomno];
}
console.log(playing());
*/
// ##############################################################
// Sorting Fruits
let fruit = ["🍎", "🍏", "🍎", "🍎", "🍏"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
sortFruits();

function sortFruits() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += " " + fruit[i];
    } else if (fruit[i] === "🍏") {
      orangeShelf.textContent += fruit[i];
    }
  }
}
