(function(root){
	var Reversi = root.Reversi = (root.Reversi || {});


var Piece = require("./piece.js").Piece;

function Board(){
	for(var i=0; i<8; i++) {
		this.grid.push([]);
		for(var j=0; j<8; j++){
			this.grid[i].push(0;)
		}
	}

	this.grid = []
};

Board.prototype.full = function() {

};

// Other helper methods may be helpful!

exports.Board = Board;


})(this);