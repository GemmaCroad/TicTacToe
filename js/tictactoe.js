//console.log('Testy mc test?');
$(document).ready(function() {

var board = [null, null, null, null, null, null, null, null, null]; //start with empty array to represent the board

var player = ['X', 'O'];
var currentPlayer = player[0];
var winner = null;

	$("table td").each( function() { //iterate over the jQuery object, executing the function for each matched element
		
		$(this).on('click', function() {

			var selectedSquare = $(this).attr("name"); // click event trigger 
			// console.log( selectedSquare );

			if (!winner) { // if not winner execute the following code

				if (board[selectedSquare] == null) { // check the box is free
					if (currentPlayer == player[0]) {
						$(this).text(player[0]);  // add 'x' to the board
						$(this).addClass("playerOne");  
						board[selectedSquare] = currentPlayer; // ammend the array item to the current player
						currentPlayer = player[1] // swap to play two ready for next turn
					} 
					else {
						$(this).text(player[1]);  // add 'o' to the board
						$(this).addClass("playerTwo");
						board[selectedSquare] = currentPlayer; // ammend the array item to the current player
						currentPlayer = player[0];  // swap back to player one again
					}
					console.log(board);
				}
				else {
					alert("That square is already taken - try again!");
				}

				checkForWinner(player[0]);  // run functions to check for winner or draw
				checkForWinner(player[1]);
				checkForDraw();

				if (winner) {
					alert("The winner is " + winner);
				}

			} else {
				alert("The game is over already... The winner was " + winner);  // if player keeps trying to click after the game is over display this message
			}
		})
	})

var checkForWinner = function(p) { // function to check the winning combinations against the game board

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

var checkForDraw = function () { // function to check if it is a drawer, are all squares taken but no winner
	if (
		(board[0] != null && board[1] != null && board[2] != null && board[3] != null && board[4] != null && board[5] != null && board[6] != null && board[7] != null && board[8] != null)

		) {
		alert("The game is a draw");
	}
}

	$("button").on('click', function() { 
		board = [null, null, null, null, null, null, null, null, null];  // reset all values to null
		$("table td").removeClass("playerOne playerTwo"); // remove css for each player
		$("table td").text("");  // remove text on the board
    	console.log(board);
    	winner = null;  // remove winner so game can be played again
	})


});	







