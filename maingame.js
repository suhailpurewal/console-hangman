var Word = require("./words.js");
var prompt = require("prompt");

console.log(
	"\n-----------------------------------------------------------" + 
	"\n Let's play a game..........." + 
	"\n-----------------------------------------------------------"
	);

prompt.start();

game = {
 	wordList: ["atlantis", "challenger", "columbia", "discovery", "enterprise", "endeavour", "rza", "gza", "method man", "raekwon", "ghostface killah", "inspectah deck", "u god", "masta killa", "cappadonna", "ol dirty bastard", "tiger style", "shaolin", "cream" ],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWord: null,

 	startGame: function (word) {
 		this.resetGuesses();
            this.currentWord = new Word(this.wordList[Math.floor(Math.random() * this.wordList.length)]);
            console.log(this.currentWord)
 		this.currentWord.getLetters();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetters'], function(err, result){
 			console.log("You guessed: " + result.guessLetters);
 			var guessNum = self.currentWord.checkLetters(result.guessLetters);
 			if(guessNum ==0) {
 				console.log("WRONG!");
 				self.guessesRemaining--;		
 			} else {
 				console.log("CORRECT");
 					if(self.currentWord.findWord()){
						console.log(
							"\n-----------------------------------------------------------" + 
							"\n YOU WON! THE WORD WAS " + self.currentWord.target +
							"\n-----------------------------------------------------------"
						);
 						return;
 					}
 			}
 						console.log(
 							"\n-----------------------------------------------------------" + 
							"\n GUESSES REMAINGING: " + self.guessesRemaining +
							"\n-----------------------------------------------------------"
						);
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 						console.log(
 							"\n-----------------------------------------------------------" + 
							"\n YOU LOST! THE WORD WAS " + self.currentWord.target +
							"\n-----------------------------------------------------------"
						);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});
 	}
};

game.startGame();