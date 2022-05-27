let cards = [];  
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: "Tika",
    chip: "150"
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chip;



function getrandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (10 < randomNumber) {
        return 10;
    } else {
        return randomNumber;
    }
} 

function startGame() {
    isAlive = true;
    let firstCard = getrandomCard();
    let secondCard = getrandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
 
function renderGame() {
    cardsEl.textContent = "Card: ";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// Add new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getrandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");



