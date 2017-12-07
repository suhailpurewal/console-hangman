var letters = require('./letters.js');

function Word(target) {
	this.target = target;
	this.lets = [];
	this.found = false;

	this.getLetters = function() {
		for (var i=0; i < this.target.length; i++) {
			this.lets.push( new letters(this.target[i]));
		}
	};

	this.findWord = function() {
		this.found = this.lets.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetters = function(guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.lets.length; i++){
			string += this.lets[i].lettersRender();
		}
		return string;
	};

}

module.exports = Word;