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

const emptyBoard = function (gameBoard) {
  gameBoard = new Array(9).fill('')
}
// assign variable to DOM id, .text() onclick to assign X or O to id, then return and push id value to array

// can I make a for loop that would iterate through a string of each div id and do all this??
// add an array of the div names and iterate through those!
// Initialization function
//

const gameOn = {
  playerID: 'X',
  playerToken: 'x',
  switchToken: function () {
    if (this.playerToken === 'x') {
      this.playerToken = 'o'
    } else {
      this.playerToken = 'x'
    }
    this.switchPlayer()
  },
  switchPlayer: function () {
    if (this.playerToken === 'o') {
      this.playerID = 'X'
    } else {
      this.playerID = 'O'
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

let gameOver = false

const isGameOver = function () {
  if (winner[0] === 'x' || winner[0] === 'o') {
    console.log(winner[0])
    gameOver = true
    console.log(gameOver)
  } else if (turn === 8) {
    gameOver = true
  } else {
    gameOver = false
  }
}

const endGame = function () {
  if (gameOver === true) {
    $('.box').off('click')
  } else {
    $('.box').on('click', function () {
      $('#game-message').text('Keep on playing...')
    })
  }
}

// const occupiedSquares = function () {
// iterate over gameBoard: draw the game when there are no empty spaces AND no win condition
// }
const winDeclaration = function () {
  $('#game-message').text('Game Winner: ' + gameOn.playerID)
  $('#game-message').css('background-color', 'green')
}

const drawDeclaration = function () {
  $('#game-message').text('Draw Game - Play Again!')
  $('#game-message').css('background-color', 'blue')
}

const onMove = function () {
  $('#game-message').text('Next move: ' + gameOn.playerToken)
  $('#game-message').css('background-color', 'grey')
}
// check empty array elements: include that in the win condition (9 turns)

const winCondition = function () {
  if (winner[0] === '' && turn <= 8 && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[1])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[7])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[3])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[5])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[4] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[4] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn === 8) {
    drawDeclaration()
    isGameOver()
    endGame()
  } else {
    onMove()
    console.log(gameBoard.length)
    console.log(turn)
  }
}

$('#squarezero').on('click', function () {
  $('#squarezero').text(gameOn.playerToken)
  const spaceZero = $('#squarezero').text()
  gameBoard.splice(0, 1, spaceZero)
  gameOn.switchToken()
  winCondition()
  $('#squarezero').off('click')
})

$('#squareone').on('click', function () {
  $('#squareone').text(gameOn.playerToken)
  const spaceOne = $('#squareone').text()
  gameBoard.splice(1, 1, spaceOne)
  gameOn.switchToken()
  winCondition()
  $('#squareone').off('click')
})

$('#squaretwo').on('click', function () {
  $('#squaretwo').text(gameOn.playerToken)
  const spaceTwo = $('#squaretwo').text()
  gameBoard.splice(2, 1, spaceTwo)
  gameOn.switchToken()
  winCondition()
  $('#squaretwo').off('click')
})

$('#squarethree').on('click', function () {
  $('#squarethree').text(gameOn.playerToken)
  const spaceThree = $('#squarethree').text()
  gameBoard.splice(3, 1, spaceThree)
  gameOn.switchToken()
  winCondition()
  $('#squarethree').off('click')
})

$('#squarefour').on('click', function () {
  $('#squarefour').text(gameOn.playerToken)
  const spaceFour = $('#squarefour').text()
  gameBoard.splice(4, 1, spaceFour)
  gameOn.switchToken()
  winCondition()
  $('#squarefour').off('click')
})

$('#squarefive').on('click', function () {
  $('#squarefive').text(gameOn.playerToken)
  const spaceFive = $('#squarefive').text()
  gameBoard.splice(5, 1, spaceFive)
  gameOn.switchToken()
  winCondition()
  $('#squarefive').off('click')
})

$('#squaresix').on('click', function () {
  $('#squaresix').text(gameOn.playerToken)
  const spaceSix = $('#squaresix').text()
  gameBoard.splice(6, 1, spaceSix)
  gameOn.switchToken()
  winCondition()
  $('#squaresix').off('click')
})

$('#squareseven').on('click', function () {
  $('#squareseven').text(gameOn.playerToken)
  const spaceSeven = $('#squareseven').text()
  gameBoard.splice(7, 1, spaceSeven)
  gameOn.switchToken()
  winCondition()
  $('#squareseven').off('click')
})

$('#squareeight').on('click', function () {
  $('#squareeight').text(gameOn.playerToken)
  const spaceEight = $('#squareeight').text()
  gameBoard.splice(8, 1, spaceEight)
  gameOn.switchToken()
  winCondition()
  $('#squareeight').off('click')
})

$('#reset-button').on('click', function () {
  $('#game-board').load('#game-board')
  emptyBoard()
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameBoard,
  gameOn,
  emptyBoard
}
