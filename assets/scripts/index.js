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
  const spaceZero = $('#squarezero').text()
  gameBoard.splice(0, 1, spaceZero)
  gameOn.switchPlayer()
})

$('#squareone').on('click', function () {
  $('#squareone').text(gameOn.playerToken)
  const spaceOne = $('#squareone').text()
  gameBoard.splice(1, 1, spaceOne)
  gameOn.switchPlayer()
})

$('#squaretwo').on('click', function () {
  $('#squaretwo').text(gameOn.playerToken)
  const spaceTwo = $('#squaretwo').text()
  gameBoard.splice(2, 1, spaceTwo)
  gameOn.switchPlayer()
})

$('#squarethree').on('click', function () {
  $('#squarethree').text(gameOn.playerToken)
  const spaceThree = $('#squarethree').text()
  gameBoard.splice(3, 1, spaceThree)
  gameOn.switchPlayer()
})

$('#squarefour').on('click', function () {
  $('#squarefour').text(gameOn.playerToken)
  const spaceFour = $('#squarefour').text()
  gameBoard.splice(4, 1, spaceFour)
  gameOn.switchPlayer()
})

$('#squarefive').on('click', function () {
  $('#squarefive').text(gameOn.playerToken)
  const spaceFive = $('#squarefive').text()
  gameBoard.splice(5, 1, spaceFive)
  gameOn.switchPlayer()
})

$('#squaresix').on('click', function () {
  $('#squaresix').text(gameOn.playerToken)
  const spaceSix = $('#squaresix').text()
  gameBoard.splice(6, 1, spaceSix)
  gameOn.switchPlayer()
})

$('#squareseven').on('click', function () {
  $('#squareseven').text(gameOn.playerToken)
  const spaceSeven = $('#squareseven').text()
  gameBoard.splice(7, 1, spaceSeven)
  gameOn.switchPlayer()
})

$('#squareeight').on('click', function () {
  $('#squareeight').text(gameOn.playerToken)
  const spaceEight = $('#squareeight').text()
  gameBoard.splice(8, 1, spaceEight)
  gameOn.switchPlayer()
})

const gameOn = {
  playerToken: 'x',
  switchPlayer: function () {
    if (this.playerToken === 'x') {
      this.playerToken = 'o'
    } else {
      this.playerToken = 'x'
    }
  }
}

const emptyBoard = function () {
  gameBoard = new Array(9).fill('')
}
// create emptyBoard function to make gameBoard into an empty array

$('#game-board').ready(function (event) {
  $('#game-board-button').on('click', emptyBoard())
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameBoard,
  gameOn,
  emptyBoard
}
