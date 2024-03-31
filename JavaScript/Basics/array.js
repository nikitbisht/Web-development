let heros = ["batman","Saktiman"];
let mc_heros = ["thor","Spiderman"];
console.log(heros);
console.log(typeof heros)

// for(let i of heros){
// 	console.log(i)
// }

heros.push("Doreamon"); //push
console.log(heros);

console.log(heros.pop()); //pop
console.log(heros);
console.log(heros.toString()); //toString



let allHeros = heros.concat(mc_heros); //Concat
console.log(allHeros);

heros.unshift("Doreamon");
heros.unshift("Ketreshu");
console.log(heros);
heros.shift();
console.log(heros);

let slice = allHeros.slice(1,4);
console.log(slice);
console.log(allHeros);
allHeros.splice(1,3,"Doreamon","Ninja Hatodi","Shinchan");
console.log(allHeros);



//Create a array to store companie's "bloomberry","microSoft","Uber","Google","IBM","Netflix".
let companies = [ "Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"]
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.splice(5,0,"Amazon");
console.log(companies);









// //for a given array with marks of stuents:- [85,97,44,37,76,60].Find the average marks of the entire class
// let marks = [85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
// 	sum += val;
// }
// console.log("Average Marks of Entire class:-",sum/marks.length);

// // for a given array with prices of 5 items [250,645,300,900,50]
// let prices = [250,645,300,900,50];
// let totalPrice = 0;
// for(let val of prices){
// 	let disc = val/10;
// 	totalPrice += val-disc;
// }
// console.log(`Total Ammount after appling discount :- ${totalPrice}`);