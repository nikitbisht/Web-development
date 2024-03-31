let str2 = '   N i k i t   ';
console.log(str2.length);
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.trim());
console.log(str2.slice(3,10));
console.log(str2.concat("Bisht"));
console.log(str2.replace("i","m"));
console.log(str2.replaceAll("i","m"));
console.log(str2.charAt(5));

let product = {
	item: "pen",
	price: 10,
};

let output = `the cost of 2 ${product.item} is ${product.price*2} rupees`;
console.log(output);