
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var boardDiv = document.getElementById('game-board');
var otherFunction = function() {
	this.innerHTML = <img src="king.png" alt="King of Spades" />
	console.log(5)

}

var clearCards = function() {
	console.log(7)
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = "";
	}
}

var isMatch = function(x) {
	if x[0] === x[1] {
		alert("Congrats! You found a match!");
	} else {
		alert("Not quite. Give it another try!");
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var createBoard = function() {

for (var i = 0; i < cards.length; i++) {
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards)
}
createBoard();


// var isMatch = function();
// function isTwoCards() {
// 	cardsInPlay.push(this.getAttribute('data-card'));
// 	if (cardsInPlay.length === 2) {
// 		isMatch(cardsInPlay);
// 		cardsInPlay = [];
// 	}
// }

// function createBoard() {
// 	var boardDiv = document.getElementById('game-board');

// 	var cards = 4
// for (var i = 0; i < card; i++) {
// 	var myDiv = document.createElement('div');
// 	myDiv.className = 'card';
// 	boardDiv.appendChild(myDiv);
// }
// createBoard(1);
// }