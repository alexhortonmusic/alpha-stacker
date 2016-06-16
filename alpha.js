var alphabet = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function stackLetters() {
	var stack="";
	var counter = 0;
	for (var i = 0; i < alphabet.length; i++) {
		stack += alphabet[i];
		counter++;
		if (counter === 5) {
			stack += " ";
			counter = 0;
		}
		console.log(stack);
	}
			
}

stackLetters();





