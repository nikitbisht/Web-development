//Promise chain basic exp
function asyncFunc1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("data 1");
			// reject("h");
			resolve("sucess");
		},5000);
	});
};

function asyncFunc2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("data 2");
			resolve("sucess");
		},5000);
	});
};

console.log("fetching data1......");
asyncFunc1().then((res)=>{
	console.log("fetching data2.....");
	asyncFunc2().then((res)=>{});
});



//another exp
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

//Promise Chain
// let p1 = getData(12);
// p1.then((res)=>{
// 	console.log(res);
// 	let p2 = getData(13);
// 	p2.then((res)=>{
// 		console.log(res);
// 		let p3 = getData(14);
// 		p3.then((res)=>{
// 			console.log(res);
// 		});
// 	});
// 	p2.catch((err)=>{
// 		console.log("rejected",err);
// 	});
// });

getData(100).then((res)=>{
	return getData(102);
}).then((res)=>{
	return getData(104);
}).then((res)=>{
	console.log(res);
});
