let obj = {
    age:12,
    wt:90,
    ht:5,
};

// console.log(obj);

// obj.color = "yellow";
// console.log(obj);

//Cloning object

//1 Spread operator
console.log("Spread Operator");
let dest = {...obj};

obj.age = 999;

console.log("Src:- ",obj);
console.log("Desti:- ",dest);

//2 Assign method
console.log("Assign Methond");
let p = Object.assign({},obj);
obj.age = 0;

console.log("Src:- ",obj);
console.log("Desti:- ",p);