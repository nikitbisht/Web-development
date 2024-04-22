//Compile time error
// console.log (1 ;    //Syntax Error

//Runtime Error
// console.log(x);     //reference error

try{
    console.log("Try Block Start");
    console.log(x);
    console.log("Try Block End");
}catch(e){
    //define krte h, error ke sath aap kya krna chate hai


    throw new Error("Bhai pehle declare kro, fir print krna");
    console.log("iam inside Catch block");

    // console.log("Your Error is this:- ",e);
}finally{
    console.log("i will run every times because i am Finally".toUpperCase());
}

let errCode = 100;
if(errCode == 100){
    throw new Error("Invalid Json");
}