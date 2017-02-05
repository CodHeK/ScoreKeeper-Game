var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var res = document.querySelector("#reset");
var game = document.querySelector("#games");
var numInput = document.querySelector("input");

p1Score = 0;
p2Score = 0;
var gameOver = false;
var winningScore;

p1Btn.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			left.classList.add("winner");
			right.classList.add("loser");
			gameOver = true;
		}
		left.textContent = p1Score;
	}
});

p2Btn.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			right.classList.add("winnner");
			left.classList.add("loser");
			gameOver = true;
		}
		right.textContent = p2Score;
	}
});

res.addEventListener("click", function() {
     
     resetter();
});

function resetter() {

	left.classList.add("reset");
	right.classList.add("reset");
	left.textContent = 0;
	right.textContent = 0;
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
}

numInput.addEventListener("change", function(){

	game.textContent = Number(numInput.value);
	winningScore = Number(numInput.value);
	resetter();
});