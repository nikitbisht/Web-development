// console.dir(document.body);
// console.log(document.body);
// console.dir(document.body.childNodes[3]);
// document.body.style.background = "green";
// document.body.childNodes[3].innerText = "acc";

/*
let heading = document.getElementById("myHeading");
console.dir(heading);
console.log(heading);
let sclass = document.getElementsByClassName('myClass');
console.dir(sclass);
console.log(sclass);
let button = document.getElementsByTagName('button');
console.dir(button);
console.log(button);
*/

// let firstEl = document.querySelector(".btn"); //1st element
// console.dir(firstEl);
                           
// let allEl = document.querySelectorAll("p")-;
// console.dir(allEl);

let div = document.querySelector("div");
console.log(div.innerText);
// console.dir(div.innerHTML);
console.dir(div.textContent); //see hidden text
let ul = document.querySelector(".fruitLst");
ul.innerText = "grapes mango";
console.log(ul.innerText);


//Practice Question
let helloJs = document.querySelector(".js");
helloJs.innerText += " from Apna College Student";
// helloJs.append(" from Apna College Student");

let box = document.querySelectorAll(".box");
let i =0;
for(let div of box){
	div.innerText = `unique value ${i++}`;
}
// box[0].innerText = " nikit";
// box[1].innerText = " singh";
// box[2].innerText = " bisht";

