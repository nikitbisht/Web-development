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
