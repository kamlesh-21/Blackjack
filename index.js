let cards= [];
let sum = 0;
let message = ""
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");


function getRandomCard() {
    let randomCard = Math.floor( (Math.random()*13) + 1);
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    let firstCard =  getRandomCard();
    let secondCard =  getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "    
    
    for (let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " " 
    }

    sumEl.textContent = "Sum: " + sum
        
    if (sum === 21) {
        message = "You have a black jack"
        hasBlackJack = true;
    } else if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

        
    }

}
    

