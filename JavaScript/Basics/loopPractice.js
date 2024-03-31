//Print all even no from 0 to 100
/*

for(let i=0; i<=100; i++){
	if(i%2 === 0){
		console.log("num =",i);
	}
}

*/
//Create a game where you start with any random game no. Ask the user to keey guessing the game no until the user enters correct value.
let gameNo = 99;
let userNo = prompt("Guess the game number:");
while(userNo != gameNo){
	userNo = prompt("You Entered wrong no. guess again");
}
console.log("Congratulation! you entered right no");