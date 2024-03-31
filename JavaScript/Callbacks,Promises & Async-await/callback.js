//Callback
function sum(a,b){
	console.log(a+b);
}

function calculator(a,b,sumCallback){
	sumCallback(a,b);
}

calculator(1,4,(a,b)=>{
	console.log(a+b);
})


//Call back hell
function getData(dataId,getNextData) {
	setTimeout(()=>{
		console.log("data",dataId);
		//for 20 there is no fn call
		if(getNextData)
			getNextData();
	},2000);
}

// getData(1); //2s
// getData(2); //2s
// getData(3); //2s
// but we want 1st then 2s then 2nd data.
// //data1
// //data2
// //data3

//Callback hell
getData(10,()=>{
	getData(20,()=>{
		getData(30,()=>{
			getData(40);
		});
	});
});
