(function(root){
	var Reversi = root.Reversi = (root.Reversi || {});

	const COLORS = ["black", "white"]

function Piece(color){
	this.color = color;
};

Piece.prototype.flip = function() {
  if(this.color == COLORS[0]){
		this.color = COLORS[1];
	}
	else{
		this.color = COLORS[0];
	}
};

exports.Piece = Piece;

})(this);