(function(root){
	var Reversi = root.Reversi = (root.Reversi || {});

	const DIRECTIONS = [
	[0,1],
	[1,0],
	[1,1],
	[1,-1],
	[0,-1],
	[-1,0],
	[-1,1],
	[-1,-1]
	]

var Piece = require("./piece.js").Piece;
var Board = require("./board.js").Board;

function Game() {
	this.board = new Board();
	this.grid = this.board.grid;
	this.player = "black"
};

// You will certainly need some more helper methods...
Game.prototype.currentPlayer = function() {
	return this.player
};

Game.prototype.won = function() {

};

Game.prototype.placePiece = function(pos, color) {
	console.log("placePiece!!!! " + pos + " " + color)
	var validDirections = []
	var game = this;
	console.log("\n\ngame " + game);
	console.log("game.board " + game.board);
	// console.log("game.board.grid " + game.board.grid);
	console.log("game.board.grid[ pos[0] ] =" + game.board.grid[ pos[0] ]);
	console.log("pos[1] " + pos[1])
	console.log("game.board.grid[ pos[0] ][ pos[1] ] =" + game.board.grid[ pos[0] ][ pos[1] ]);

	var pieceAtPos = game.board.grid[ pos[0] ][ pos[1] ];
	if(pieceAtPos !== undefined){
		console.log("Piece already at position! " + pieceAtPos)
		throw new Error("Invalid Move")
		return
	}
		console.log("Piece not at position! " + pieceAtPos + pos)

console.log("player color " + color)
	DIRECTIONS.forEach(function(direction){

		var newPos =[ pos[0] + direction[0], pos[1]+direction[1] ];
		var gridPiece = game.board.grid[newPos[0]][newPos[1]];
		// console.log("gridPiece " + gridPiece)
		// console.log("newPos " + newPos)
		// console.log("direction " + direction)
		var count = 0;
		while(gridPiece !== undefined && gridPiece.color !== color){
			// console.log("while")
			// console.log("gridPiece " + gridPiece)
			// console.log("newPos " + newPos)
			// console.log("direction " + direction)
			newPos = [ direction[0] + newPos[0], direction[1]+newPos[1]];
			gridPiece = game.board.grid[newPos[0]][newPos[1]];
			count += 1;
		}
		if(gridPiece !== undefined && count > 0 && gridPiece.color === color){

			console.log("Valid direction " + gridPiece.color)
			console.log("dir " + direction)
		 	validDirections.push(direction);
		}
		// else{
		// 	console.log("invalid direction " + direction)
		// 	console.log("gridPiece " + gridPiece)
		// 	console.log("newPos " + newPos)
		// 	console.log(gridPiece !== undefined )
		// 	console.log(count > 1 )
		// 	console.log(gridPiece.color === color)
		// }
	});

	if(validDirections.length === 0){
		console.log("Invalid Move " + pos + " " + color)
		throw new Error("Invalid Move")
		return
	}

	console.log("setting piece pos " + pos)
	console.log("validDirections " + validDirections)

	game.board.grid[pos[0]][pos[1]] = new Piece(color);

	validDirections.forEach(function(dir){
		var newPos =[ pos[0] + dir[0], pos[1]+dir[1]];
		var gridPiece = game.board.grid[newPos[0]][newPos[1]];

		while(gridPiece !== undefined && gridPiece.color !== color){
			gridPiece.flip();
			newPos = [ dir[0] + newPos[0], dir[1]+newPos[1]];
			gridPiece = game.board.grid[newPos[0]][newPos[1]];
		}
	}
); game.runLoop()
};

Game.prototype.runLoop = function() {

	if(this.player === "white"){
		this.player = "black"
	}else{
		this.player = "white"
	}

};

exports.Game = Game;

})(this);