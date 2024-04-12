const addBtn = document.querySelector("#add-btn");
const addItem = document.querySelector("#add-item");
const container = document.querySelector(".list-item-container");
const toggle = document.querySelector(".toggle-btn");
const removeList = document.querySelectorAll(".remove-btn");

function isInList(str){
	const  listItem = document.querySelectorAll(".item-name");
	for(item of listItem){
		if(item.innerText === str){
			return false;
		}
	}
	return true;
	
}

addBtn.addEventListener("click",()=>{
	if(addItem.value !== "" && isInList(addItem.value)){
		let div = document.createElement("div");
		div.setAttribute("class","list-item");
		let span = document.createElement("span");
		span.setAttribute("class","item-name");
		span.innerText = addItem.value;
		addItem.value = "";
		let btn = document.createElement("button");
		btn.setAttribute("class","remove-btn");
		btn.innerText = "Remove";
		div.appendChild(span);
		div.appendChild(btn);
		container.appendChild(div);
		// removeListItem();
	}
})

//for those who is already in html
// removeListItem();

// function removeListItem(){
// 	const removeList = document.querySelectorAll(".remove-btn");
// 	console.log(removeList);
// 	// removeList.forEach(button =>{
// 	// 	button.addEventListener("click",()=>{
// 	// 		console.log("remove fn");
// 	// 		button.parentElement.remove();
// 	// 		console.log("error");
// 	// 		console.log(removeList);
// 	// 	})
// 	// })

// 	for (let i=0; i<removeList.length; i++) {
// 		removeList[i].addEventListener("click",()=>{
// 			console.log("remove fn");
// 			removeList[i].parentElement.remove();
// 		})
// 	}
// }




container.addEventListener("click",function (a){
	if(a.target.tagName == "BUTTON")
		a.target.parentElement.remove();
})




//dark mode
let darkMode = false;
toggle.addEventListener("click",()=>{
	darkMode = !darkMode;
	console.log(darkMode)
	if(darkMode === true){
		document.querySelector("body").classList.add("darkMode");
	}else{
		document.querySelector("body").classList.remove("darkMode");
	}
})