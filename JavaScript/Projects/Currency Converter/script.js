const BASE_URL = "https://open.er-api.com/v6/latest/${baseCurrency}";

window.addEventListener("load",()=>{
	updateCurrency();
});


//populate dropdown
const dropdown = document.querySelectorAll(".dropdown select");

//2 time run for selects
for(let select of dropdown){
	for(currCode in countryList){
		let newOpt = document.createElement("option");
		newOpt.innerText = currCode;
		newOpt.value = currCode;
		if(select.name === "from" && currCode === "USD"){
			newOpt.selected = "selected";
		}
		if(select.name === "to" && currCode === "INR"){
			newOpt.selected = "selected";
		}
		select.append(newOpt);
	}
	select.addEventListener("change",(evt)=>{
		updateFlag(evt.target);
	});
}

//flag update
const updateFlag = (element)=>{
	let currCode = element.value;
	let countryCode = countryList[currCode];
	let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

	const flag = element.parentElement.querySelector("img");
	flag.src = newSrc;
}


const convertCurrency = async (amount,fromCurr,toCurr) =>{
	const currencies = await fetch(`https://open.er-api.com/v6/latest/${fromCurr}`);
	let data = await currencies.json();
	let totalAmount = data.rates[toCurr]*amount;
	const msg = document.querySelector(".msg");
	msg.innerText = `${amount} ${fromCurr} = ${totalAmount} ${toCurr}`;
}


const btn = document.querySelector("#exchange");
btn.addEventListener("click",(e)=>{
	//jo kaam auto hoore teh voh ni honge
	e.preventDefault();
	updateCurrency();
});

const updateCurrency = ()=>{
	const amount = document.querySelector(".amount input");
	let amtValue = amount.value;
	if(amtValue < 1 || amount === ""){
		amount.value = "1";
		amtValue = 1; 
	}
	let fromCurr = dropdown[0].value;
	let toCurr = dropdown[1].value;
	convertCurrency(amtValue,fromCurr,toCurr);
}

//Dark mode
const modeBtn = document.querySelector("#toggle");
let darkMode = false;
modeBtn.addEventListener("click",(e)=>{
	darkMode = !darkMode;
	console.log(darkMode);
	if(darkMode){
		document.querySelector("body").classList.add("darkMode");
	}else{
		document.querySelector("body").classList.remove("darkMode");
	}
});


//swap
const swap = document.querySelector("#swap");
swap.style.cursor = 'pointer';
swap.addEventListener("click",()=>{
	//swap data
	let temp = dropdown[1].value;
	dropdown[1].value = dropdown[0].value;
	dropdown[0].value = temp;
	//img
	updateFlag(dropdown[0]);
	updateFlag(dropdown[1]);
	//update curency
	updateCurrency();
})