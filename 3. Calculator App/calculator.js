let errormessage = document.getElementById("error");

function errormess() {
  errormessage.textContent = "Something went wrong, please try again";
}

// Calculator App
let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumel = document.getElementById("sum-el");
function add() {
  let sum = num1 + num2;
  sumel.textContent = "Sum: " + sum;
}
function substract() {
  let subs = num1 - num2;
  sumel.textContent = "Substraction: " + subs;
}
function multiply() {
  let multip = num1 * num2;
  sumel.textContent = "Multiplication: " + multip;
}
function divide() {
  let devi = num1 / num2;
  sumel.textContent = "Division: " + devi;
}
