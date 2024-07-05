// 21 is best,not above 21 lose, as close to 21 below, A is 11, king = 10

// left at Section 3, Lesson 53:Methods on Object 04:08:48
let player = {
  name: "Mikel",
  chips: 145,
};
let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
// let sumEL = document.querySelector("#sum-el"); Another method to take elements

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13 + 1);
  console.log(randomCard);
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  // CASH OUT
  messageEl.textContent = message;
  console.log(message, isAlive);
}
function newCard() {
  if (isAlive && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

// Math.random() - generates a random number between  0 <= x < 1
// Math.floor() - removes the decimals
