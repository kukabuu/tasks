function capitalizeLetters(str) {
	return str
		.toLowerCase()
		.split(" ")
		.map(item => item[0].toUpperCase() + item.substring(1))
		.join(" ");
}

console.log(capitalizeLetters("i love javascript"));
