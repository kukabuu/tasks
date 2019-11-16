let voted = {};

function checkVoted(name) {
	if (voted[name]) {
		console.log("он проголосовал!");
	} else {
		voted[name] = true;
		console.log("он не проголосовал!");
	}
}

checkVoted("tom");
checkVoted("tom");
checkVoted("mike");
checkVoted("piter");
