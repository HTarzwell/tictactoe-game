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

const checkIfUndefined = function (index) {
  if (gameBoard[index] === '') {
    return 'this square is fine'
  } else {
    return 'choose another square'
  }
}

// function takes an array position and determines whether it has a value of undefined
// checkIfUndefined(2)

const makeMove = function (index, token) {
  gameBoard[index] = token
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
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

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

const compareIndexes = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]) //put a pin in this!
  }
}

const checkWinConditionX = function () {
  winConditions.every(compareIndexes(indexOfX))
}

const checkWinConditionO = function () {
  winConditions.every(compareIndexes(indexOfO))
}

// problems: 4: writing a function that assigns a value to an empty space in the array and returns a warning if already assigned
// problems: 4.1: function has to be a function
// problems: 4.2 function has to take an element of the gameBoard array as a parameter
// problems: 4.3: function has to determine if element !=== undefined
// problems: 4.4: function has to return an alert if element !=== undefined
// problems: 4.5: function has to prevent makeMove if element !=== undefined

// problems: 6: writing a function that tracks and determines a win condition (three in a row vertical, horizonal, diagonal)
// WIN CONDITION IS A BOOLEAN
// export game board
module.exports = {
  gameBoard,
  gameBoardSquares,
  emptyBoard,
  makeMove,
  checkIfUndefined,
  currentPlayer,
  switchPlayer,
  winConditions
}

// SETTINGS: CHANGE PASSWORD & LOG OUT -- MORE USER STORIES
