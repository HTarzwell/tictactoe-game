// first attempt at game board creation

const gameBoard = ['X', '', 'O', '', '', '', 'X', '', ''] // DON'T NEST YOUR ARRAYS

const gameBoardSquares = function (event) {
  console.log('Im inside gameBoardSquares and gameBoard is', gameBoard)
  for (let i = gameBoard[0]; i <= gameBoard.length; i++) {
    console.log(gameBoard[i])
  }
}

const checkIfNull = function (array) {
  let i = gameBoard[0]
  if (i !== 'undefined') {
    console.log
  }
}

// problems: 4: writing a function that assigns a value to an empty space in the array and returns a warning if already assigned
// problems: 4.1: function has to be a function
// problems: 4.2 function has to take an element of the gameBoard array as a parameter
// problems: 4.3: function has to determine if element !=== undefined
// problems: 4.4: function has to return an alert if element !=== undefined

// problems: 4.5: writing a function that selects a specific array slot and checks if it is available (i.e has non-null property)
// problems: 5: writing a function that varies the element assigned to the array slot depending on user (X and O)
// problems: 6: writing a function that tracks and determines a win condition (three in a row vertical, horizonal, diagonal)

// export game board
module.exports = {
  gameBoard,
  gameBoardSquares
}

// SETTINGS: CHANGE PASSWORD & LOG OUT -- MORE USER STORIES
