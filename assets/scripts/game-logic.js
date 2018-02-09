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

const indexOfX = []

const indexOfO = []

const compareBoardPushIndex = function (board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'x') {
      indexOfX.push(i)
    } else if (board[i] === 'o') {
      indexOfO.push(i)
    }
  }
}

indexOfX.toString()

indexOfO.toString()

const winConditions = function () {
  if (indexOfX.includes('0', '1', '2')) {
    return 'X Wins!'
  } else if (indexOfX.includes('3', '4', '5')) {
    return 'X Wins!'
  } else if (indexOfX.includes('6', '7', '8')) {
    return 'X Wins!'
  } else if (indexOfX.includes('0', '3', '6')) {
    return 'X Wins!'
  } else if (indexOfX.includes('1', '4', '7')) {
    return 'X Wins!'
  } else if (indexOfX.includes('2', '5', '8')) {
    return 'X Wins!'
  } else if (indexOfX.includes('0', '4', '8')) {
    return 'X Wins!'
  } else if (indexOfX.includes('2', '4', '6')) {
    return 'X Wins!'
  } else if (indexOfO.includes('0', '1', '2')) {
    return 'O Wins!'
  } else if (indexOfO.includes('3', '4', '5')) {
    return 'O Wins!'
  } else if (indexOfO.includes('6', '7', '8')) {
    return 'O Wins!'
  } else if (indexOfO.includes('0', '3', '6')) {
    return 'O Wins!'
  } else if (indexOfO.includes('1', '4', '7')) {
    return 'O Wins!'
  } else if (indexOfO.includes('2', '5', '8')) {
    return 'O Wins!'
  } else if (indexOfO.includes('0', '4', '8')) {
    return 'O Wins!'
  } else if (indexOfO.includes('2', '4', '6')) {
    return 'O Wins!'
  } else {
    return 'Match Is A DRAW!'
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
  winConditions,
  compareBoardPushIndex
}

// SETTINGS: CHANGE PASSWORD & LOG OUT -- MORE USER STORIES
