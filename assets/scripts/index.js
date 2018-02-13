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

// can I make a for loop that would iterate through a string of each div id and do all this??
// add an array of the div names and iterate through those!
// Initialization function
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

let turn = 0

$(document).ready(function () {
  $('.box').click(function () {
    turn++
  })
})

const winner = ['']

$(document).ready(function () {
  if (winner === 'x') {
    $('.box').off('click')
    console.log('Win for ' + winner)
  } else if (winner === 'o') {
    $('.box').off('click')
    console.log('Win for ' + winner)
  }
})

// const occupiedSquares = function () {
// iterate over gameBoard: draw the game when there are no empty spaces AND no win condition
// }

// check empty array elements: include that in the win condition (9 turns)

const winCondition = function () {
  if (winner[0] === '' && turn <= 8 && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[1])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[4])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[7])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[3])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[4])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[5])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[4] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[4])
  } else if (winner[0] === '' && turn <= 8 && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[4] !== '') {
    console.log('Game Winner!')
    winner.splice(0, 1, gameBoard[4])
  } else if (winner[0] === '' && turn === 8) {
    console.log('Draw Game')
  } else {
    console.log('Keep Playing!')
    console.log(gameBoard.length)
    console.log(turn)
  }
}

// Reset function
const emptyBoard = function () {
  gameBoard = new Array(9).fill('')
}
// create emptyBoard function to make gameBoard into an empty array

$('#game-board-button').on('submit', function () {
  $('game-board div').empty()
  emptyBoard()
})

$('#squarezero').on('click', function () {
  $('#squarezero').text(gameOn.playerToken)
  const spaceZero = $('#squarezero').text()
  gameBoard.splice(0, 1, spaceZero)
  gameOn.switchPlayer()
  winCondition()
  $('#squarezero').off('click')
})

$('#squareone').on('click', function () {
  $('#squareone').text(gameOn.playerToken)
  const spaceOne = $('#squareone').text()
  gameBoard.splice(1, 1, spaceOne)
  gameOn.switchPlayer()
  winCondition()
  $('#squareone').off('click')
})

$('#squaretwo').on('click', function () {
  $('#squaretwo').text(gameOn.playerToken)
  const spaceTwo = $('#squaretwo').text()
  gameBoard.splice(2, 1, spaceTwo)
  gameOn.switchPlayer()
  winCondition()
  $('#squaretwo').off('click')
})

$('#squarethree').on('click', function () {
  $('#squarethree').text(gameOn.playerToken)
  const spaceThree = $('#squarethree').text()
  gameBoard.splice(3, 1, spaceThree)
  gameOn.switchPlayer()
  winCondition()
  $('#squarethree').off('click')
})

$('#squarefour').on('click', function () {
  $('#squarefour').text(gameOn.playerToken)
  const spaceFour = $('#squarefour').text()
  gameBoard.splice(4, 1, spaceFour)
  gameOn.switchPlayer()
  winCondition()
  $('#squarefour').off('click')
})

$('#squarefive').on('click', function () {
  $('#squarefive').text(gameOn.playerToken)
  const spaceFive = $('#squarefive').text()
  gameBoard.splice(5, 1, spaceFive)
  gameOn.switchPlayer()
  winCondition()
  $('#squarefive').off('click')
})

$('#squaresix').on('click', function () {
  $('#squaresix').text(gameOn.playerToken)
  const spaceSix = $('#squaresix').text()
  gameBoard.splice(6, 1, spaceSix)
  gameOn.switchPlayer()
  winCondition()
  $('#squaresix').off('click')
})

$('#squareseven').on('click', function () {
  $('#squareseven').text(gameOn.playerToken)
  const spaceSeven = $('#squareseven').text()
  gameBoard.splice(7, 1, spaceSeven)
  gameOn.switchPlayer()
  winCondition()
  $('#squareseven').off('click')
})

$('#squareeight').on('click', function () {
  $('#squareeight').text(gameOn.playerToken)
  const spaceEight = $('#squareeight').text()
  gameBoard.splice(8, 1, spaceEight)
  gameOn.switchPlayer()
  winCondition()
  $('#squareeight').off('click')
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameBoard,
  gameOn,
  emptyBoard
}
