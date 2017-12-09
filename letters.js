// function to put _ for blanks in word

var letters = function(let){
	this.charac = let;
	this.appear = false;
	this.lettersRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//exporting to pick up on words
module.exports = letters;