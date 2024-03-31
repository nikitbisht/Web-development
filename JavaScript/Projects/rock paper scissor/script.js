let userScore = 0;
let compScore = 0;

const uScore = document.querySelector("#userScore");
const cScore = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const mode = document.querySelector(".mode");
const reset = document.querySelector(".reset");

let darkMode = false;
//dark mode
mode.addEventListener("click",()=>{
	darkMode = !darkMode;
	if(darkMode){
		mode.innerText = "Light Mode";
		document.querySelector("body").classList.remove("light");
		document.querySelector("body").classList.add("dark");
	}else{
		mode.innerText = "Dark Mode";
		document.querySelector("body").classList.remove("dark");
		document.querySelector("body").classList.add("light");
	}
});

//reset btn
reset.addEventListener("click", ()=>{
	userScore = compScore = 0;
	uScore.innerText = userScore;
	cScore.innerText = compScore;
})

//Random fn;
const ans =  generateRandom = (min,max) =>{
	let val = Math.floor(Math.random()*(max-min+1))+min;
	let options = ["rock","scissor","paper"];
	return options[val];
}

const showWinner = (userWin,userChoice,compChoice) =>{
	if(userWin){
		uScore.innerText = ++userScore;
		result.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
		result.style.backgroundColor = "green";
		console.log("you win");
	}else{
		cScore.innerText = ++compScore;
		result.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`;
		result.style.backgroundColor = "red";
		console.log("you lose");
	}
}
const playGame = (userChoice)=>{
	const compChoice = generateRandom(0,2);
	console.log(`User Choice:-  ${userChoice} | Comp Choice ${compChoice}`);
	
	//Compare
	if(compChoice === userChoice){
		console.log("Draw");
		result.innerText = "Game was Draw.Play again.";
		result.style.backgroundColor = '#081B13';
	}else {
		let userWin = true;
		if(userChoice === "rock"){
			//sissor | paper
			userWin = compChoice === "paper"?false:true;
		}else if(userChoice === "paper"){
			//sissor | rock
			userWin = compChoice === "scissor"?false:true;
		}else{
			//rock | paper
			userWin  = compChoice === "rock"?false:true;
		}
		showWinner(userWin,userChoice,compChoice);
	}
	console.log(`User Score:-  ${userScore} | Comp Score:- ${compScore}`);
}


choices.forEach((choice) =>{
	// console.log(choice);
	choice.addEventListener("click", ()=>{
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	})
})