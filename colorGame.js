//var numSquares = 6;
var isSix = false;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay")
var pickedColor = pickColor();

var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var selected = document.querySelector(".selected");

easy.addEventListener("click", function(){
	//alert("easy")
	isSix = false;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	//selected.style.backgroundColor = "steelblue";
	//numSquares = 3
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#232323";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function(){
	//alert("hard")
	isSix = true;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	//numSquares = 6
	//selected.style.backgroundColor = "steelblue";

	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#232323";
	for (var i = 0; i < squares.length; i++) {
		
		squares[i].style.backgroundColor = colors[i];
		
		squares[i].style.display = "block";
		
	}
});

colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function(){
	//alert("clicked");
	//when click, generate all new colors;
	if (isSix == true) {
		colors = generateRandomColors(6);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		reset.textContent = "New Color";
		message.textContent = "";
		h1.style.backgroundColor = "steelblue";
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
	} else if (isSix == false) {
		colors = generateRandomColors(3);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		reset.textContent = "New Color";
		message.textContent = "";
		h1.style.backgroundColor = "#232323";
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
	}
});

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares.
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor == pickedColor) {
			//alert("Correct!");
			message.textContent = "Correct";
			reset.textContent = "Play Again?";
			changeColors(this.style.backgroundColor);
			h1.style.backgroundColor = pickedColor;

		} else {
			//alert("Wrong");
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop thru all squares to match picked color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array, add num random colors to array
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	//generate random 0 - 255 in rgb
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
