const facts = document.querySelector("#facts");
const btn = document.querySelector(".btn");
const url = "https://cat-fact.herokuapp.com/facts";
btn.style.cursor = "pointer";
const noGenerate = (min,max) =>{
	return Math.floor(Math.random()*(max-min+1))+min;
}
const getFacts = async()=>{
	console.log("getting data..");
	let promise = await fetch(url);
	console.log(promise);	//json format

	let data = await promise.json();
	let no = noGenerate(0,4);
	facts.innerText = data[no].text;
	console.log(data[no].text);
}
btn.addEventListener("click",getFacts);




//Promise chain
// function getFacts(){
// 	fetch(url).then((res)=>{
// 		return res.json();
// 	}).then((res)=>{
// 		console.log(res[0].text);
// 	});
// }
