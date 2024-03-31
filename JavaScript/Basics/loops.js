// let x = prompt("Enter the no: ");
// for(let i=0; i<5; i++){
// 	console.log("Nikit Bisht");
// }
//Sum of 1 to 5

		//For loop
// let sum = 0;
// for(let i = 1; i<=5; i++){
// 	sum+=i;
// }
// console.log("Sum of 1 to n:",sum);
		// //While loop
// let i=0;
// while(i<=5){
// 	console.log(i);
// 	i++;
// }
		// //do while loop

// do{
// 	console.log(i);
// 	i++;
// }while(i<=5);

			// For-of loop
let size = 0;
let x = "String is really hard";
for(let ch of x){
	size++;
	// console.log(ch);
}
console.log("Stirng Size",size);

const student = {
	fullname: "Nikit Bisht",
	roll: 40,
	section: "D2",
	number: 123456789,
};

for(let key in student){
	console.log("key:",key,"val:",student[key]);
}



