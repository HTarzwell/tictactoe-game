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

let spaceZero = $('#squarezero')
let spaceOne = $('#squareone') // assign variable to DOM id, .text() onclick to assign X or O to id, then return and push id value to array
let spaceTwo = $('#squaretwo')
let spaceThree = $('#squarethree')
let spaceFour = $('#squarefour')
let spaceFive = $('#squarefive')
let spaceSix = $('#squaresix')
let spaceSeven = $('#squareseven')
let spaceEight = $('#squareeight')

$('#squarezero').on('click', function () {
  $('#squarezero').text(gameOn.playerToken)
})

$('#squareone').on('click', function () {
  $('#squareone').text(gameOn.playerToken)
})

const gameOn = {
  playerToken: 'x',
  gameBoardSquares: function (event) {
    console.log('Im inside gameBoardSquares and gameBoard is', gameBoard)
    for (let i = gameBoard[0]; i <= 9; i++) {
      console.log(gameBoard[i])
    }
  },
  makeMove: function (index) {
    if (gameBoard[index] === '') { // note: is this what you want or do you need undefined?
      gameBoard[index] = this.playerToken
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

// create emptyBoard function to make gameBoard into an empty array
// problems: 6: writing a function that tracks and determines a win condition (three in a row vertical, horizonal, diagonal)
// WIN CONDITION IS A BOOLEAN
// export game board

$('#game-board').ready(function () {
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
