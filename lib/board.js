(function(root){
	var Reversi = root.Reversi = (root.Reversi || {});


var Piece = require("./piece.js").Piece;

function Board(){
	this.grid = [];
	for(var i=0; i<8; i++) {
		this.grid.push([]);
		for(var j=0; j<8; j++){
			this.grid[i].push(undefined);
		}
	}

	this.grid[3][3] = new Piece("white");
	this.grid[3][4] = new Piece("black");
	this.grid[4][3] = new Piece("black");
	this.grid[4][4] = new Piece("white");

};

Board.prototype.full = function() {
	for(var i=0; i<8; i++) {
		for(var j=0; j<8; j++){
			if(this.grid[i][j] === undefined){
				return false;
			}
		}
	}
	return true;
};

// Other helper methods may be helpful!

exports.Board = Board;


})(this);