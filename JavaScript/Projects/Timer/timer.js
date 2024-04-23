//Just for fun
window.addEventListener("blur",()=>{
  document.title = "BreakUP";
})
window.addEventListener("focus",()=>{
  document.title = "RelationShip";
})


const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondInput = document.querySelector("#second");


const startButton = document.querySelector("#start-btn");
const resetButton = document.querySelector("#reset-btn");


let countInterval;
let pause = true;

//START BUTTON
startButton.addEventListener("click",(e)=>{
  e.preventDefault();
  pause = !pause;
  if(!pause){
    calculateTime();
    startButton.classList.add("pause");
    startButton.classList.remove("st-btn");
    startButton.innerText = "Pause"
  }else{
    startButton.classList.remove("pause");
    startButton.classList.add("st-btn");
    startButton.innerText = "Start";
    clearInterval(countInterval);
  }
})

function calculateTime(){
  countInterval = setInterval(()=>{
    updateTimer();
  },1000);
}

function updateTimer(){

  let flag = true;
  if(secondInput.value > 0){
    flag = false;
    secondInput.value--;
  }else if(minutesInput.value > 0){
    flag = false;
    secondInput.value = 59;
    minutesInput.value--;
  }else if(hoursInput.value > 0){
    flag = false;
    secondInput.value = 59;
    minutesInput.value = 59;
    hoursInput.value--;
  }

  if(flag){
    clearInterval(countInterval);
    startButton.innerText = "Start";
  }
    
    if(hoursInput.value == 0){
      hoursInput.value = "00";
    }
    if(minutesInput.value == 0){
      minutesInput.value = "00";
    }
    if(secondInput.value == 0){
      secondInput.value = "00";
    }
}

//RESET BUTTON
resetButton.addEventListener("click",(e)=>{
  clearInterval(countInterval);
  startButton.innerText = "Start";
})







//INPUT HANDLE
document.querySelector("#hours").addEventListener("input",(e)=>{
  if(e.target.value > 24){
    e.target.value = 24;
  }else if(e.target.value < 0){
    e.target.value = 0;
  }
})
document.querySelector("#minutes").addEventListener("input",(e)=>{
  if(e.target.value > 59){
    e.target.value = 59;
  }else if(e.target.value < 0){
    e.target.value = 0;
  }
})
document.querySelector("#second").addEventListener("input",(e)=>{
  if(e.target.value > 59){
    e.target.value = 59;
  }else if(e.target.value < 0){
    e.target.value = 0;
  }
})




