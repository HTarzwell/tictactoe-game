'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// first attempt at game logic
let gameBoard = new Array(9).fill('') // #game-board all child elements
// assign variable to DOM id, .text() onclick to assign X or O to id, then return and push id value to array

// push playerToken to the gameBoard index? Use splice!

$('#squarezero').on('click', function () {
  if (event.currentTarget === '') {
  $('#squarezero').text(gameOn.playerToken)
  const spaceZero = $('#squarezero').text()
  gameBoard.splice(0, 1, spaceZero)
  console.log(gameBoard)
  } else {
    alert('Please choose another square!')
  }
})

$('#squareone').on('click', function () {
  $('#squareone').text(gameOn.playerToken)
  const spaceOne = $('#squareone').text()
  gameBoard.splice(1, 1, spaceOne)
  console.log(gameBoard)
})

$('#squaretwo').on('click', function () {
  $('#squaretwo').text(gameOn.playerToken)
  const spaceTwo = $('#squaretwo').text()
  gameBoard.splice(2, 1, spaceTwo)
  console.log(gameBoard)
})

$('#squarethree').on('click', function () {
  $('#squarethree').text(gameOn.playerToken)
  const spaceThree = $('#squarethree').text()
  gameBoard.splice(3, 1, spaceThree)
  console.log(gameBoard)
})

$('#squarefour').on('click', function () {
  $('#squarefour').text(gameOn.playerToken)
  const spaceFour = $('#squarefour').text()
  gameBoard.splice(4, 1, spaceFour)
  console.log(gameBoard)
})

$('#squarefive').on('click', function () {
  $('#squarefive').text(gameOn.playerToken)
  const spaceFive = $('#squarefive').text()
  gameBoard.splice(5, 1, spaceFive)
  console.log(gameBoard)
})

$('#squaresix').on('click', function () {
  $('#squaresix').text(gameOn.playerToken)
  const spaceSix = $('#squaresix').text()
  gameBoard.splice(6, 1, spaceSix)
  console.log(gameBoard)
})

$('#squareseven').on('click', function () {
  $('#squareseven').text(gameOn.playerToken)
  const spaceSeven = $('#squareseven').text()
  gameBoard.splice(7, 1, spaceSeven)
  console.log(gameBoard)
})

$('#squareeight').on('click', function () {
  $('#squareeight').text(gameOn.playerToken)
  const spaceEight = $('#squareeight').text()
  gameBoard.splice(8, 1, spaceEight)
  console.log(gameBoard)
})

const gameOn = {
  playerToken: 'x',
  gameBoardSquares: function (event) {
    console.log('Im inside gameBoardSquares and gameBoard is', gameBoard)
    for (let i = gameBoard[0]; i <= 9; i++) {
      console.log(gameBoard[i])
    }
  },
  makeMove: function () {
    if ($('this') === '') { // note: is this what you want or do you need undefined?
      $('this') = this.playerToken
    } else {
      return 'choose another square'
    }
  },
  switchPlayer: function () {
    if (this.playerToken === 'x') {
      this.playerToken = 'o'
    } else {
      this.playerToken = 'x'
    }
  },
  winCondition: function () {
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
}
// function switchPlayer

const emptyBoard = function () {
  gameBoard = new Array(9).fill('')
}

document.getElementById('#squarezero').addEventListener('click', gameOn.makeMove)

// create emptyBoard function to make gameBoard into an empty array

$('#game-board').ready(function (event) {
  $('#game-board-button').on('click', gameOn.gameBoardSquares)
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameBoard,
  gameOn,
  emptyBoard
}
