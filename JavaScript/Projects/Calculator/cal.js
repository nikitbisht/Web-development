const operation = document.querySelectorAll(".opr");
const input = document.querySelector(".input-container input");

let expr = "0";


for(let opr of operation){
	opr.addEventListener("click",()=>{
		//Check for operation
		if(opr.classList.contains("operation")){
			if(input.value !== "0" && !isOperand(expr.charAt(expr.length -1))){
				
				// expr += opr.innerText;
				expr += opr.innerText === 'x'?"*":opr.innerText;
			}
		}else{ //for number
			if(input.value === "0"){
				if(opr.innerText != "00" && opr.innerText != "0")
					expr = opr.innerText;
			}else{
				if(opr.innerText == '.' && !expr.includes('.'))
					expr += opr.innerText;
				else if(opr.innerText != '.')
					expr += opr.innerText;	
			}	
		}
		input.value = expr;
	});
}


//Allclear
const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
	input.value = 0;
	expr = "0";
});

//backSpace
const backSpace = document.querySelector(".backSpace");
backSpace.addEventListener("click",()=>{
	expr = expr.slice(0,-1);
	if(expr.length == 0)
		expr += 0;
	input.value = expr;
});
//result
const equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
	if(!isOperand(expr.charAt(expr.length -1))){

		expr = calculatePercentage(expr);

		input.value = eval(expr);
		expr = input.value;
	}
});


//Check for isoprand
const isOperand = (ch)=>{
	if(ch === '+' ||ch === '-' ||ch === '/' ||ch === 'x' ||ch === '%')
		return true;
	return false;
}



// Function to handle percentage calculation
function calculatePercentage(expr) {
    // Replace the percentage symbol (%) with the appropriate mathematical expression
    return expr.replace(/(\d+(\.\d+)?)%/g, '($1 / 100)');
}


//Darkmode
const toggle = document.querySelector("#toggle");
let darkMode = false;
toggle.addEventListener("click",()=>{
	darkMode = !darkMode;
	console.log(darkMode);
	if(darkMode){
		document.querySelector("body").classList.add("darkMode");
	}else{
		document.querySelector("body").classList.remove("darkMode");
	}
})
