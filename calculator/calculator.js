function add (x,y) {
	return x + y;
}

function subtract (x,y) {
	return x - y;
}

function sum (array) {
	let result = 0
	array.forEach(function(number) {
		result += number;
	});
	return result;
}

function multiply (array) {
	let result = array[0];
	array.shift();
	array.forEach(function(number) {
		result *= number;
	});
	return result;
}

function power(x,y) {
	return x ** y;
}

function factorial(x) {
	let result = 1;
	if(x==0) return 1;
	else{
		for(i=x; i>1; i--){
			result *= i;
		}
	}
	return result
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}