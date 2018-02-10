// first attempt at game board creation

let gameBoard = new Array(9).fill('') // technique from Stack Overflow

const currentPlayer = {
  token: 'x'
}

const gameBoardSquares = function (event) {
  console.log('Im inside gameBoardSquares and gameBoard is', gameBoard)
  for (let i = gameBoard[0]; i <= gameBoard.length; i++) {
    console.log(gameBoard[i])
  }
}

// function takes an array position and determines whether it has a value of undefined
// checkIfUndefined(2)

const makeMove = function (index) {
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer.token
  } else {
    return 'choose another square'
  }
}
// makeMove puts a value in an array position

const switchPlayer = function (currentPlayer) { // pass in currentPlayer because the variable needs to be worked on
  if (currentPlayer.token === 'x') {
    currentPlayer.token = 'o'
  } else {
    currentPlayer.token = 'x'
  }
}
// function switchPlayer

const emptyBoard = function () {
  gameBoard = new Array(9).fill('')
}

// create emptyBoard function to make gameBoard into an empty array

const winCondition = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    return 'Game Winner!'
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    return 'Game Winner!'
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    return 'Game Winner!'
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    return 'Game Winner!'
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    return 'Game Winner!'
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    return 'Game Winner!'
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    return 'Game Winner!'
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    return 'Game Winner!'
  } else {
    return 'Draw Game'
  }
}
// problems: 6: writing a function that tracks and determines a win condition (three in a row vertical, horizonal, diagonal)
// WIN CONDITION IS A BOOLEAN
// export game board

module.exports = {
  gameBoard,
  gameBoardSquares,
  emptyBoard,
  makeMove,
  currentPlayer,
  switchPlayer,
  winCondition
}
