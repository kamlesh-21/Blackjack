let firstCard = 8
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

cardEl.textContent = "Cards: " + firstCard + " " + secondCard
sumEl.textContent = "Sum: " + sum

function startGame() {
    let message = ""

    if (sum === 21) {
        message = "You have a black jack"
    } else if (sum < 21) {
        message = "you are still in the game"
        hasBlackJack = false
    } else {
        message = "You are out of game"
        isAlive = false;
    }

}

