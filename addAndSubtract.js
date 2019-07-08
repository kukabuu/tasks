//Реализовать функции five, add, one, seven, subtract, two

const numFunc = num => {
	return func => {
		if (func) {
			return func(num);
		}
		return num;
	};
};

const five = numFunc(5);
const one = numFunc(1);
const seven = numFunc(7);
const two = numFunc(2);

const add = num1 => num2 => {
	return num2 + num1;
};

const subtract = num1 => num2 => {
	return num2 - num1;
};

console.log(five(add(one()))); // 6
console.log(seven(subtract(two()))); // 5
