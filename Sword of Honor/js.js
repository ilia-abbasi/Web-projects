var cache;
var playerCardsCount = 0;
var computerCardsCount = 0;
var playerPower = 0;
var computerPower = 0;
var playerScore = 0;
var computerScore = 0;
var playerCards = [];
var computerCards = [];
var iff = "";
var turn = "player";
var slots = {
	
	"s0": document.getElementById('slot0'),
	"s1": document.getElementById('slot1'),
	"s2": document.getElementById('slot2'),
	"s3": document.getElementById('slot3'),
	"s4": document.getElementById('slot4'),
	"s5": document.getElementById('slot5'),
	"s6": document.getElementById('slot6')
};
var turnLabel = document.getElementById('turn');
var cardd = document.getElementById('cardd');
var box = document.getElementById('box');
var restart = false;
var cards = [

	{
		"name": "Sword of honor",
		"atk": 77,
		"def": 40,
		"index": 0,
		"owner": "none"
	},
	
	{
		"name": "Shield of honor",
		"atk": 5,
		"def": 82,
		"index": 1,
		"owner": "none"
	},
	
	{
		"name": "Mace man",
		"atk": 64,
		"def": 41,
		"index": 2,
		"owner": "none"
	},
	
	{
		"name": "Mace man",
		"atk": 64,
		"def": 41,
		"index": 3,
		"owner": "none"
	},
	
	{
		"name": "Mace man",
		"atk": 64,
		"def": 41,
		"index": 4,
		"owner": "none"
	},
	
	{
		"name": "Mace man",
		"atk": 64,
		"def": 41,
		"index": 5,
		"owner": "none"
	},
	
	{
		"name": "Spear man",
		"atk": 31,
		"def": 35,
		"index": 6,
		"owner": "none"
	},
	
	{
		"name": "Spear man",
		"atk": 31,
		"def": 35,
		"index": 7,
		"owner": "none"
	},
	
	{
		"name": "Spear man",
		"atk": 31,
		"def": 35,
		"index": 8,
		"owner": "none"
	},
	
	{
		"name": "Spear man",
		"atk": 31,
		"def": 35,
		"index": 9,
		"owner": "none"
	},
	
	{
		"name": "Spear man",
		"atk": 31,
		"def": 35,
		"index": 10,
		"owner": "none"
	},
	
	{
		"name": "Spear man(M)",
		"atk": 40,
		"def": 39,
		"index": 11,
		"owner": "none"
	},
	
	{
		"name": "Spear man(M)",
		"atk": 40,
		"def": 39,
		"index": 12,
		"owner": "none"
	},
	
	{
		"name": "Spear man(M)",
		"atk": 40,
		"def": 39,
		"index": 13,
		"owner": "none"
	},
	
	{
		"name": "Axe man",
		"atk": 69,
		"def": 40,
		"index": 14,
		"owner": "none"
	},
	
	{
		"name": "Axe man",
		"atk": 69,
		"def": 40,
		"index": 15,
		"owner": "none"
	},
	
	{
		"name": "Axe man",
		"atk": 69,
		"def": 40,
		"index": 16,
		"owner": "none"
	},
	
	{
		"name": "Axe man",
		"atk": 69,
		"def": 40,
		"index": 17,
		"owner": "none"
	},
	
	{
		"name": "Battering ram",
		"atk": 80,
		"def": 5,
		"index": 18,
		"owner": "none"
	},
	
	{
		"name": "Battering ram",
		"atk": 80,
		"def": 5,
		"index": 19,
		"owner": "none"
	},
	
	{
		"name": "Zeus",
		"atk": 73,
		"def": 74,
		"index": 20,
		"owner": "none"
	},
	
	{
		"name": "Fire Element",
		"atk": 70,
		"def": 38,
		"index": 21,
		"owner": "none"
	},
	
	{
		"name": "Water Element",
		"atk": 55,
		"def": 30,
		"index": 22,
		"owner": "none"
	},
	
	{
		"name": "Earth Element",
		"atk": 24,
		"def": 71,
		"index": 23,
		"owner": "none"
	},
	
	{
		"name": "Air Element",
		"atk": 51,
		"def": 22,
		"index": 24,
		"owner": "none"
	},
	
	{
		"name": "Poison",
		"atk": 71,
		"def": 39,
		"index": 25,
		"owner": "none"
	},
	
	{
		"name": "Poison",
		"atk": 71,
		"def": 39,
		"index": 26,
		"owner": "none"
	},
	
	{
		"name": "Gladiator",
		"atk": 74,
		"def": 74,
		"index": 27,
		"owner": "none"
	},
	
	{
		"name": "Artillery",
		"atk": 70,
		"def": 20,
		"index": 28,
		"owner": "none"
	},
	
	{
		"name": "Artillery",
		"atk": 70,
		"def": 20,
		"index": 29,
		"owner": "none"
	},
	
	{
		"name": "Villager",
		"atk": 13,
		"def": 24,
		"index": 30,
		"owner": "none"
	},
	
	{
		"name": "Villager",
		"atk": 13,
		"def": 24,
		"index": 31,
		"owner": "none"
	},
	
	{
		"name": "Lazy king",
		"atk": 23,
		"def": 32,
		"index": 32,
		"owner": "none"
	},
	
	{
		"name": "Catapult",
		"atk": 79,
		"def": 10,
		"index": 33,
		"owner": "none"
	},
	
	{
		"name": "Catapult",
		"atk": 79,
		"def": 10,
		"index": 34,
		"owner": "none"
	},
	
	{
		"name": "Snow queen",
		"atk": 63,
		"def": 64,
		"index": 35,
		"owner": "none"
	},
	
	{
		"name": "The Lord",
		"atk": 75,
		"def": 78,
		"index": 36,
		"owner": "none"
	},
	
	{
		"name": "Hot pitch",
		"atk": 30,
		"def": 60,
		"index": 37,
		"owner": "none"
	},
	
	{
		"name": "Achilles",
		"atk": 90,
		"def": 90,
		"index": 38,
		"owner": "none"
	},
	
	{
		"name": "Wall",
		"atk": 0,
		"def": 78,
		"index": 39,
		"owner": "none"
	},
	
	{
		"name": "Wall",
		"atk": 0,
		"def": 78,
		"index": 40,
		"owner": "none"
	},
	
	{
		"name": "Commander",
		"atk": 69,
		"def": 69,
		"index": 41,
		"owner": "none"
	},
	
	{
		"name": "Soldier",
		"atk": 55,
		"def": 57,
		"index": 42,
		"owner": "none"
	},
	
	
	{
		"name": "Soldier",
		"atk": 55,
		"def": 57,
		"index": 43,
		"owner": "none"
	},
	
	{
		"name": "Soldier",
		"atk": 55,
		"def": 57,
		"index": 44,
		"owner": "none"
	},
	
	{
		"name": "Soldier",
		"atk": 55,
		"def": 57,
		"index": 45,
		"owner": "none"
	},
	
	{
		"name": "Soldier",
		"atk": 55,
		"def": 57,
		"index": 46,
		"owner": "none"
	},
	
	{
		"name": "Soldier(M)",
		"atk": 60,
		"def": 63,
		"index": 47,
		"owner": "none"
	},
	
	{
		"name": "Soldier(M)",
		"atk": 60,
		"def": 63,
		"index": 48,
		"owner": "none"
	},
	
	{
		"name": "Soldier +",
		"atk": 61,
		"def": 65,
		"index": 49,
		"owner": "none"
	},
	
	{
		"name": "Sword man",
		"atk": 70,
		"def": 65,
		"index": 50,
		"owner": "none"
	},
	
	{
		"name": "Sword man",
		"atk": 70,
		"def": 65,
		"index": 51,
		"owner": "none"
	},
	
	{
		"name": "Sword man",
		"atk": 70,
		"def": 65,
		"index": 52,
		"owner": "none"
	},
	
	{
		"name": "Sword man",
		"atk": 70,
		"def": 65,
		"index": 53,
		"owner": "none"
	},
	
	{
		"name": "Sword man",
		"atk": 70,
		"def": 65,
		"index": 54,
		"owner": "none"
	},
	
	
	{
		"name": "Knight",
		"atk": 60,
		"def": 70,
		"index": 55,
		"owner": "none"
	},
	
	
	{
		"name": "Knight",
		"atk": 60,
		"def": 70,
		"index": 56,
		"owner": "none"
	},
	
	
	{
		"name": "Knight",
		"atk": 60,
		"def": 70,
		"index": 57,
		"owner": "none"
	},
	
	
	{
		"name": "Knight",
		"atk": 60,
		"def": 70,
		"index": 58,
		"owner": "none"
	},
	
	
	{
		"name": "Knight",
		"atk": 60,
		"def": 70,
		"index": 59,
		"owner": "none"
	},
	
	
	{
		"name": "Knight +",
		"atk": 60,
		"def": 70,
		"index": 60,
		"owner": "none"
	},
	
	{
		"name": "Archer",
		"atk": 33,
		"def": 6,
		"index": 61,
		"owner": "none"
	},
	
	{
		"name": "Archer",
		"atk": 33,
		"def": 6,
		"index": 62,
		"owner": "none"
	},
	
	{
		"name": "Archer",
		"atk": 33,
		"def": 6,
		"index": 63,
		"owner": "none"
	},
	
	{
		"name": "Archer",
		"atk": 33,
		"def": 6,
		"index": 64,
		"owner": "none"
	},
	
	{
		"name": "Archer",
		"atk": 33,
		"def": 6,
		"index": 65,
		"owner": "none"
	},
	
	{
		"name": "Archer(M)",
		"atk": 42,
		"def": 20,
		"index": 66,
		"owner": "none"
	},
	
	{
		"name": "Archer +",
		"atk": 48,
		"def": 16,
		"index": 67,
		"owner": "none"
	},
	
	{
		"name": "Crossbow man",
		"atk": 32,
		"def": 43,
		"index": 68,
		"owner": "none"
	},
	
	{
		"name": "Crossbow man",
		"atk": 32,
		"def": 43,
		"index": 69,
		"owner": "none"
	},
];


function start(){

	while(playerCardsCount < 7){
	
		let rnd = Math.floor(Math.random() * 70);
	
		if(cards[rnd].owner != "none")
			continue;

		
		cards[rnd].owner = "player";
		playerCards.push(rnd);
		playerCardsCount++;
	
	}
	
	while(computerCardsCount < 7){
	
		let rnd = Math.floor(Math.random() * 26);
	
		if(cards[rnd].owner != "none")
			continue;

		
		cards[rnd].owner = "computer";
		computerCards.push(rnd);
		computerCardsCount ++;
		
	}

	console.log(playerCards);
	console.log(computerCards);

	for(let i = 0; i < 7; i++){

		slots['s' + i.toString()].innerHTML = "\"" + cards[playerCards[i]].name + "\"<br><br>ATK: " + cards[playerCards[i]].atk + "<br>DEF: " + cards[playerCards[i]].def + "  ";
	}

	turnLabel.innerHTML = "ATTACK!";

}



start();





function play(index) {
	
	if(cards[playerCards[index]].owner != "player"){
		
		alert("This card is not yours anymore!");
		return null;
	}
	
	if(turn == "player"){
		
		playerPower = cards[playerCards[index]].atk;
		turn = "computer";
	} else {
		
		playerPower = cards[playerCards[index]].def;
		turn = "player";
	}
	
	if(turn == "computer"){
		
		computerPower = cards[computerCards[0]].def;
		turnLabel.innerHTML = "DEFEND!";
		iff = "\nComputer Played:\n\"" + cards[computerCards[0]].name + "\"\nDEF: " + cards[computerCards[0]].def;
	}
	else {
		
		computerPower = cards[computerCards[0]].atk;
		turnLabel.innerHTML = "ATTACK!";
	}

	document.getElementById('s' + index).style.display = "none";


	cards[computerCards[0]].owner = "none";
	computerCardsCount --;
	computerCards.shift();
	
	cards[playerCards[index]].owner = "none";
	playerCardsCount --;
	
	if(playerCardsCount == 3){
		
		box.style.justifyContent = "space-around";
	}
	
	if(playerCardsCount == 1){
		
		box.style.justifyContent = "center";
	}
	
	if(playerPower > computerPower){
		
		alert("You won!" + iff);
		playerScore ++;
		iff = "";
	}
	if(playerPower < computerPower){
		
		alert("You lost!" + iff);
		computerScore ++;
		iff = "";
	}
	if(playerPower == computerPower){
		alert("Draw!!!");
	}
	
	console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
	
	if(playerCardsCount == 0){
		
		alert("Your score: " + playerScore + "\nComputer Score: " + computerScore);
		playerScore = 0;
		computerScore = 0;
		
		for(let i = 0; i < 7; i++){
			
			document.getElementById('s' + i).style.display = "block";
			playerCards.pop();
		}
		box.style.justifyContent = "space-between";
		start();
		return null;
	}
	if(turn == "computer"){
		
		cardd.innerHTML = "Computer Played: <br><br>\"" + cards[computerCards[0]].name + "\"<br>ATK: " + cards[computerCards[0]].atk;
	} else {
		cardd.innerHTML = "Play a card!";
	}
}