var ranNumber = Math.floor((Math.random() * 80 + 20 ));
var diamondNumber = Math.floor((Math.random() * 10 + 1 ));
var rubyNumber = Math.floor((Math.random() * 10 + 2 ));
var emeraldNumber = Math.floor((Math.random() * 5 + 1 ));
var sapphireNumber = Math.floor((Math.random() * 7 + 4 ));
var total = 0;
var wins = 0;
var losses = 0;

function reset(){
	total = 0;
	diamondNumber = Math.floor((Math.random() * 10 + 1 ));
	rubyNumber = Math.floor((Math.random() * 10 + 5 ));
	emeraldNumber = Math.floor((Math.random() * 5 + 1 ));
	sapphireNumber = Math.floor((Math.random() * 7 + 4 ));
}

function check(){
	if(total == ranNumber){
		alert("you win!")
		wins++;
		reset();
		ranNumber = Math.floor((Math.random() * 101 + 19 ));
		document.getElementById("randomNumber").innerHTML = + ranNumber;
		document.getElementById("sum").innerHTML = + total;
		document.getElementById("win").innerHTML ="Wins: " + wins;
	}
	else if(total > ranNumber){
		alert("you lose...")
		losses++;
		reset();
		ranNumber = Math.floor((Math.random() * 80 + 20 ));
		document.getElementById("randomNumber").innerHTML = + ranNumber;
		document.getElementById("sum").innerHTML = + total;
		document.getElementById("loss").innerHTML ="Losses: " + losses;	
	};
}

$(document).ready(function() {

	document.getElementById("randomNumber").innerHTML = + ranNumber;
	document.getElementById("sum").innerHTML = + total;

	if(diamondNumber == rubyNumber || diamondNumber == emeraldNumber || 
		diamondNumber == sapphireNumber || rubyNumber == emeraldNumber ||
		rubyNumber == sapphireNumber || emeraldNumber == sapphireNumber) {
		reset();
	};

	$("#diamond").on("click", function(){
		total += diamondNumber;
		document.getElementById("sum").innerHTML = + total;
		check();
	});

	$("#ruby").on("click", function(){
		total += rubyNumber;
		document.getElementById("sum").innerHTML = + total;
		check();
	});

	$("#emerald").on("click", function(){
		total += emeraldNumber;
		document.getElementById("sum").innerHTML = + total;
		check();
	});

	$("#sapphire").on("click", function(){
		total += sapphireNumber;
		document.getElementById("sum").innerHTML = + total;
		check();
	});

	console.log(diamondNumber);
	console.log(emeraldNumber);
	console.log(sapphireNumber);
	console.log(rubyNumber);

});