/*
Normal Object
 const student = {
 	fullname: "Nikit Bisht",
 	marks: 95,
 	printMarks: function(){
 		console.log("marks:- ",this.marks);
 	}
 };

const employe = {
	calTax(){
		console.log("tax rate is 10%");
	},
};
const karan = {
	salary: 5000,
	calTax(){
		console.log("tax rate is 20%");
	},
};
karan.__proto__ = employe;

*/


/*

class car{
	constructor(brand,milage){
		this.brand = brand;
		this.milage = milage;
		console.log("Creating new obj");
	}

	start(){
		console.log("Start");
	}

	stop(){
		console.log("Stop");
	}
	setBrand(brand){
		this.brand = brand;
	}
};

let obj = new car("lambo",10);
obj.start();
obj.stop();

let supra = new car();
supra.setBrand("supraa");
*/

/*
class parent{
	money(){
		console.log("I have money");
	}
}
class child extends parent{
	time(){
		console.log("I have Time");
	}
}

let obj = new parent();
let obj2 = new child();
*/

class person{
	constructor(name){
		this.name = name;
		this.species = "home shepiens";
	}
	eat(){
		console.log("eat");
	}
	work(){
		console.log("do nothing");
	}
}

class engineer extends person{
	constructor(name,branch){
		super(name);		//to invoke parent class consturctor
		this.branch = branch;
	}
	work(){
		super.eat();
		console.log("Solve problems");
	}
}
let ram = new person();
let nikit = new engineer("nk","Cse");








//Exercise
//you are creating a website for your college. create a class User with 2 properties, name & email. it also have a method called viewData() thata allow you to view webiste data.
let Data = "Secret info";
class user{
	constructor(name,email){
		this.name = name;
		this.email = email;
	}
	viewData(){
		console.log(`UserName:- ${this.name} \nUserEmai:- ${this.email}`);
		console.log(Data);
	}
};

class admin extends user{
	constructor(name,email){
		super(name,email);
	}
	editData(newdata){
		Data = newdata;
	}
}

let s1 = new user("prank","prank123@gamail.com");
s1.viewData();

let admin1 = new admin("Nikit","nikitBisht@gamail.com");
admin1.editData("update Secret info");
console.log(admin1);








//Error handing
let a = 5;
let b = 10;
console.log('a:- ',a);
console.log('b:- ',b);
console.log('a+b:- ',a+b);
console.log('a+b:- ',a+b);
try{
	console.log('a+b:- ',a+c);	//error
}catch(err){
	console.log(err);
}
console.log('a+b:- ',a+b);
console.log('a+b:- ',a+b);
console.log('a+b:- ',a+b);

