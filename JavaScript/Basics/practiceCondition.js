//Multiple of 5 or not
// let x = prompt("Enter the number:");
// if(x % 5 === 0){
// 	console.log(x,"is a Multiple of 5");
// }else{
// 	console.log(x,"is Not Multiple of 5");
// }
let ch ;
let marks = prompt("Enter your marks");
switch(marks >= 0 && marks <=100){
	case (marks >= 90 && marks <= 100):
		console.log("hello");
		ch = 'A';
		break;
	case marks >= 70 && marks <= 89:
		ch = 'B';
		break;
	case marks >= 60 && marks <= 69:
		ch = 'C';
		break;
	case marks >= 50 && marks <= 59:
		ch = 'D';
		break;
	case marks >= 0 && marks <= 49:
		ch = 'F';
		break;
	default:
		console.log("Invalid marks");
}
console.log("Your Grade",ch);

