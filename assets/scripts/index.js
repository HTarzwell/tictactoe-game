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

$('#squarezero').on('click', function () {
  $('#squarezero').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceZero = $('#squarezero').text()
  gameBoard.splice(0, 1, spaceZero)
  console.log(gameOn.xSpaces)
  gameOn.winCondition()
  return gameOn.xWins()
})

$('#squareone').on('click', function () {
  $('#squareone').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceOne = $('#squareone').text()
  gameBoard.splice(1, 1, spaceOne)
  console.log(gameOn.xSpaces)
  gameOn.winCondition()
  return gameOn.xWins()
})

$('#squaretwo').on('click', function () {
  $('#squaretwo').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceTwo = $('#squaretwo').text()
  gameBoard.splice(2, 1, spaceTwo)
  console.log(gameOn.xSpaces)
  gameOn.winCondition()
  return gameOn.xWins()
})

$('#squarethree').on('click', function () {
  $('#squarethree').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceThree = $('#squarethree').text()
  gameBoard.splice(3, 1, spaceThree)
  gameOn.winCondition()
  console.log(gameOn.xSpaces)
  gameOn.xWins()
})

$('#squarefour').on('click', function () {
  $('#squarefour').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceFour = $('#squarefour').text()
  gameBoard.splice(4, 1, spaceFour)
  gameOn.winCondition()
  console.log(gameOn.xSpaces)
  return gameOn.xWins()
})

$('#squarefive').on('click', function () {
  $('#squarefive').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceFive = $('#squarefive').text()
  gameBoard.splice(5, 1, spaceFive)
  gameOn.winCondition()
  console.log(gameOn.xSpaces)
  return gameOn.xWins()
})

$('#squaresix').on('click', function () {
  $('#squaresix').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceSix = $('#squaresix').text()
  gameBoard.splice(6, 1, spaceSix)
  gameOn.winCondition()
  console.log(gameOn.xSpaces)
  return gameOn.xWins()
})

$('#squareseven').on('click', function () {
  $('#squareseven').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceSeven = $('#squareseven').text()
  gameBoard.splice(7, 1, spaceSeven)
  gameOn.winCondition()
  console.log(gameOn.xSpaces)
  return gameOn.xWins()
})

$('#squareeight').on('click', function () {
  $('#squareeight').text(gameOn.playerToken)
  gameOn.switchPlayer()
  const spaceEight = $('#squareeight').text()
  gameBoard.splice(8, 1, spaceEight)
  gameOn.winCondition()
  console.log(gameOn.xSpaces)
  return gameOn.xWins()
})

const gameOn = {
  playerToken: 'o',
  xSpaces: [],
  oSpaces: [],
  makeMove: function () {
    if ($(this).text() !== '') {
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
    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] === 'x') {
        this.xSpaces.push(i)
      } else if (gameBoard[i] === 'o') {
        this.oSpaces.push(i)
      } else {
        return i
      }
    }
  },
  xWins: function () {
    if (this.xSpaces.includes(0, 1, 2)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(3, 4, 5)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(6, 7, 8)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(0, 3, 6)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(1, 4, 7)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(2, 5, 8)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(0, 4, 8)) {
      console.log('X Wins!')
    } else if (this.xSpaces.includes(2, 4, 6)) {
      console.log('X Wins!')
    } else {
      console.log('Keep Playing!')
    }
  }
}
// function switchPlayer

const emptyBoard = function () {
  gameBoard = new Array(9).fill('')
}
// create emptyBoard function to make gameBoard into an empty array

$('#game-board').ready(function (event) {
  $('#game-board-button').on('click', emptyBoard())
})

$('#game-board').ready(function (event) {
  $('#game-board-button').on('click', gameOn.switchPlayer())
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameBoard,
  gameOn,
  emptyBoard
}
