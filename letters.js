// function to put _ for blanks in word

var letters = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//exporting to pick up on maingame
module.exports = letters;