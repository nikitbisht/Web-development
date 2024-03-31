//Promises

let promise = new Promise((resolve,reject)=>{
	console.log("i am Promise");
	resolve("sucess");
	// reject("lose");
});


const getPromise = ()=>{
	return new Promise((resolve,reject)=>{
		console.log("i am Promise");
		// resolve("sucess");
		reject("Network issue");
	});
};


//Use Promise(handle)
let peromise = getPromise();
peromise.then((res)=>{
	console.log("Promise is fullfiled",res);
});

peromise.catch((err)=>{
	console.log("rejected ",err);
});


//Promises
function getData(dataId,getNextData) {
	//it will rtn me a promise so after 5s we will give you data, before 5s promis is "pending" after 5s resolve/reject.
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(dataId%2 ==0){
				console.log("data",dataId);
				resolve("success");
			}else{
				reject("error");
			}
			if(getNextData)
				getNextData();
		},2000);
	})
}

getData(234,()=>{
	getData(199,()=>{
		getData(10);
	});
});

