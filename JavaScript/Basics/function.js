// function myOpnion(msg){
// 	console.log(msg);
// 	console.log(`I love javaScript ${3000}`);

// }
// function add(x,y){
// 	return x+y;
// }
// console.log(add(10,49));

// //Arrow function(Modern Js)

// const arrowMul = (a,b) =>{
// 	return a*b;
// }
// console.log(arrowMul(2,7));



// //Create a fn that taken string as an argument & return no of vowels in that string.
// function countVovel(str) {
// 	let cnt = 0;
// 	for(let ch of str){
// 		if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
// 			cnt++;
// 		}
// 	}
// 	return cnt;
// }

// console.log(countVovel("Hello"));

// const arrowCountVovel = (str) => {
// 	let cnt = 0;
// 	for(let ch of str){
// 		if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
// 			cnt++;
// 		}
// 	}
// 	return cnt;
// }

// console.log(arrowCountVovel("apna college"));


//for Each loop in array

// let arr=[10,20,30,40,50];
// arr.forEach(function printValue(val,index,arr) {
// 	console.log(val,index,arr);
// });
// let arr1 = ["Mumbai","Uttarakhand","banglore"];

// arr1.forEach((val,idx) => {
// 	console.log(val,idx);
// });

// //for a given array of num, print the square of each value using the forEach loop.
// let calSquare = (val)=>{
// 	console.log(val**2);
// }

// arr.forEach(calSquare);







//important method

let arr = [1,2,3,4,5];
let newArray = arr.map((val)=>{		//map
	return(val**2);
})
console.log(newArray);

let evenArray = arr.filter((val)=>{		//Filter
	return val%2 === 0;
})
console.log(evenArray);


let sum = arr.reduce((result,val)=>{ 	//reduce
	return result + val;
})
console.log(sum);


//Find largest
let larNum = arr.reduce((largest,curr)=>{
	return largest > curr ? largest : curr;
})
console.log(larNum);

// we given array of marks of student. filter out of the marks of the student that score 90+.
let marks = [87,93,64,99,86];
let bestMarks = marks.filter((val)=>{
	return val > 90;
})
console.log(`90+ marks:- ${bestMarks}`);

//take a no from the user. Create a array of numbers from 1 to n;
let n = prompt("Enter the Size of Array: ");
let arr3 = [];
for(let i=0; i<n; i++){
	arr3[i] = i+1;
}
console.log(arr3);

//use th reduce method to calculate sum of all number in the array.
let sum1 = arr3.reduce((pre,curr)=>{
	return pre + curr;
})
console.log("Sum of Array:- ",sum1);

//use the reduce methon to calculate the product of all no in th array.
let product = arr3.reduce((pre,curr)=>{
	return pre* curr;
})
console.log("product of Array:- ",product);
