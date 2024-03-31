/*
//Arrribute
let div = document.querySelector('div');
let id = div.getAttribute("id");

console.log(div.getAttribute("name"));
console.log(id);
//change attribute
let para = document.querySelector("p");
para.setAttribute("class", "myClass");

console.log(div.style);
// div.style.backgroundColor = "purple";
div.style.fontSize = "20px"
// div.innerText = "hello";
// div.style.visibility = "hidden";
let newbutton = document.createElement("button");
newbutton.innerText = "click me!";
console.dir(newbutton);

// insert button in end of div element
div.append(newbutton);
//insert in the top 
div.prepend(newbutton);
//add before the node
div.before(newbutton);
//add after teh node
para.after(newbutton);

let heading = document.createElement("h2");
heading.innerHTML = "<i>Learn Document Object Maniplation</i>";
document.querySelector("body").prepend(heading);

//remove element 
para.remove();

*/
//Exercise:- Create a button element.Give it a text "click me", bgcolor red and textvoloe white.

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = 'white';

document.querySelector("body").prepend(btn);

let myPara = document.querySelector(".myContent");
myPara.classList.add("content");
console.log(myPara.classList);

