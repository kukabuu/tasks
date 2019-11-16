/*Написать функцию myNew, чтобы она работала 
как конструктор, но без вызова new.*/

function Person(name, age) {
	this.name = name;
	this.age = age;
}

function newPerson(constr, ...args) {
	let instance = Object.create(constr.prototype);
	constr.apply(instance, args);
	return instance;
}

let katya = newPerson(Person, "katya", 23);

console.log(katya instanceof Person);
