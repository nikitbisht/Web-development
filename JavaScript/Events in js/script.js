/*
let btn1 = document.querySelector(".btn1");
let a = 34;
btn1.onclick = (e) =>{
	console.log(e);
	console.log(e.type);
	console.log(e.target);
	console.log(e.clientX);
	console.log(e.clientY);
	// console.log(e.content);
	// a++;
	// console.log(a);
}
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () =>{
	console.log("double click");
}

let box = document.querySelector("#box");
box.style.height = "100px";
box.style.width = "100px";
box.style.padding = "10px",
box.style.backgroundColor = "greenyellow";

box.onmouseover = () =>{
	console.log("this is a box");
}
*/


//Event Listener
/*
let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", (e) =>{
	console.log("btn1 was clicked");
	console.log(e.type);
	console.log(e.target);
	console.log(e.clientX,e.clientY);
});
const handler2 = () =>{
	console.log("btn1 was clicked - handler2");
}
btn1.addEventListener("click", handler2);

btn1.addEventListener("click", (e) =>{
	console.log("btn1 was clicked - hadler3");
});


btn1.removeEventListener("click",handler2);



*/

//Exercise :- create a toggle button that change teh screen color to dark mode and vice-versa
let mode = document.querySelector(".mode");
let body = document.querySelector("body");
let darkMode = false;

mode.addEventListener("click",() =>{	
	darkMode = !darkMode;
	console.log(darkMode);
	if(darkMode){
		body.classList.remove("light");
		body.classList.add("dark");
	}else{
		body.classList.remove("dark");
		body.classList.add("light");
	}
})

