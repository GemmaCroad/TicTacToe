//console.log('Testy mc test?');
$(document).ready(function() {

var board = [null, null, null, null, null, null, null, null, null];

var player = ['X', 'O'];
var currentPlayer = player[0];
var winner = null;

	$("table td").each( function() {
		
		$(this).on('click', function() {

			var selectedSquare = $(this).attr("name");
			// console.log( selectedSquare );

			if (!winner) {

				if (board[selectedSquare] == null) {
					if (currentPlayer == player[0]) {
						$(this).text(player[0]);
						$(this).addClass("playerOne");
						board[selectedSquare] = currentPlayer;
						currentPlayer = player[1]
					} 
					else {
						$(this).text(player[1]);
						$(this).addClass("playerTwo");
						board[selectedSquare] = currentPlayer;
						currentPlayer = player[0];
					}
					console.log(board);
				}
				else {
					alert("That square is already taken - try again!");
				}

				checkForWinner(player[0]);
				checkForWinner(player[1]);
				checkForDraw();

				if (winner) {
					alert("The winner is " + winner);
				}

			} else {
				alert("The game is over already... The winner was " + winner);
			}
		})
	})

var checkForWinner = function(p) {

	if (
		(board[0] == p && board[1] == p && board[2] == p) || // first row
		(board[3] == p && board[4] == p && board[5] == p) || // second row
		(board[6] == p && board[7] == p && board[8] == p) || // third row

		(board[0] == p && board[3] == p && board[6] == p) || // first col
		(board[1] == p && board[4] == p && board[7] == p) || // second col
		(board[2] == p && board[5] == p && board[8] == p) || // third col

		(board[0] == p && board[4] == p && board[8] == p) || // diag 1
		(board[2] == p && board[4] == p && board[6] == p)    // diag 2
	) {
		winner = p;
	}
}

var checkForDraw = function () {
	if (
		(board[0] != null && board[1] != null && board[2] != null && board[3] != null && board[4] != null && board[5] != null && board[6] != null && board[7] != null && board[8] != null)

		) {
		alert("The game is a draw");
	}
}

	$("button").on('click', function() {
		board = [null, null, null, null, null, null, null, null, null];
		$("table td").removeClass("playerOne playerTwo");
		$("table td").text("");
    	console.log(board);
    	winner = null;
	})


});	







