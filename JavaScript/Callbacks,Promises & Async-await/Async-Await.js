//Async Await exp
function api() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("Whether data");
			resolve(200);
		},3000);
	});
}
async function getWhetherData(){
	console.log("Fetching data");
	await api(); //1st call
	console.log("Fetching data2");
	await api(); //2nd call
}
getWhetherData();




//Another exp with IIFE
// using async and await
function getData(dataId) {
	//it will rtn me a promise so after 5s we will give you data, before 5s promis is "pending" after 5s resolve/reject.
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(dataId%2 ==0){
				console.log("data",dataId);
				resolve("success");
			}else{
				reject("Number is odd");
			}
		},2000);
	})
}

//IIFE(Immediately envoke fn expression)
(async function() {
	console.log("fetching data1");
	await getData(10);
	console.log("fetching data2");
	await getData(12);
	console.log("fetching data3");
	await getData(16);
	console.log("fetching data4");
	await getData(14);
})();
//Unessary call
// gettingData();

