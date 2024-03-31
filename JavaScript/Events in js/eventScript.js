//click event
document.querySelector(".btn").addEventListener("click",() =>{
	console.log("Button was clicked");
});
//mouseover event
document.querySelector(".box").addEventListener("mouseover",()=>{
	console.log("Entered in box");
});
//keydown event
document.querySelector(".name").addEventListener("keydown",(e)=>{
	console.log(e.key);
});
//keyup event
document.querySelector(".name").addEventListener("keyup",(e)=>{
	console.log(e.target.value);
});
//Submit
document.querySelector("form").addEventListener('submit',(e)=>{
	e.preventDefault();
	console.log("Form Submited");
})
//load event
document.querySelector("#imge").addEventListener("load",()=>{
	console.log("Image Loaded");
})
//resize event
window.addEventListener("resize",()=>{
	console.log("Window resize");
})