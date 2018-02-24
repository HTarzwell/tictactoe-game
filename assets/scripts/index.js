'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

$(document).ready(function () {
  allSquares()
  $('#game-board').hide()
  $('#third-form').hide()
  $('#fourth-form').hide()
  $('#fifth-form').hide()
})

let index = ''

let value = ''

let turn = 0

let winner = ['']

let gameOver = false

const gameOn = {
  gameBoard: new Array(9).fill(''),
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

const resetBoard = function () {
  gameOn.gameBoard = new Array(9).fill('')
  gameOver = false
  turn = 0
  winner = new Array(1).fill('')
  gameOn.playerID = 'X'
  gameOn.playerToken = 'x'
  $('#squarezero').text('')
  $('#squareone').text('')
  $('#squaretwo').text('')
  $('#squarethree').text('')
  $('#squarefour').text('')
  $('#squarefive').text('')
  $('#squaresix').text('')
  $('#squareseven').text('')
  $('#squareeight').text('')
  $('#game-message').text('')
  console.log(winner)
  console.log(gameOver)
  console.log(turn)
  console.log('gameBoard is ', gameOn.gameBoard)
  allSquares()
}

const isGameOver = function () {
  if (winner[0] === 'x' || winner[0] === 'o') {
    gameOver = true
  } else if (turn === 8) {
    gameOver = true
  } else {
    gameOver = false
  }
}

const endGame = function () {
  if (gameOver === true) {
    $('.box').off('click')
    console.log(gameOver)
  } else {
    $('.box').on('click')
    $('#game-message').text('Player X Ready')
    $('#game-message').css('background-color', 'blue')
  }
}

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

const allSquares = function () {
  $('#squarezero').on('click', function () {
    $('#squarezero').text(gameOn.playerToken)
    const spaceZero = $('#squarezero').text() // build a function for array index + token
    gameOn.gameBoard.splice(0, 1, spaceZero)
    gameOn.switchToken()
    winCondition()
    $('#squarezero').off('click')
    turn++
  })

  $('#squareone').on('click', function () {
    $('#squareone').text(gameOn.playerToken)
    const spaceOne = $('#squareone').text()
    gameOn.gameBoard.splice(1, 1, spaceOne)
    gameOn.switchToken()
    winCondition()
    $('#squareone').off('click')
    turn++
  })

  $('#squaretwo').on('click', function () {
    $('#squaretwo').text(gameOn.playerToken)
    const spaceTwo = $('#squaretwo').text()
    gameOn.gameBoard.splice(2, 1, spaceTwo)
    gameOn.switchToken()
    winCondition()
    $('#squaretwo').off('click')
    turn++
  })

  $('#squarethree').on('click', function () {
    $('#squarethree').text(gameOn.playerToken)
    const spaceThree = $('#squarethree').text()
    gameOn.gameBoard.splice(3, 1, spaceThree)
    gameOn.switchToken()
    winCondition()
    $('#squarethree').off('click')
    turn++
  })

  $('#squarefour').on('click', function () {
    $('#squarefour').text(gameOn.playerToken)
    const spaceFour = $('#squarefour').text()
    gameOn.gameBoard.splice(4, 1, spaceFour)
    gameOn.switchToken()
    winCondition()
    $('#squarefour').off('click')
    turn++
  })

  $('#squarefive').on('click', function () {
    $('#squarefive').text(gameOn.playerToken)
    const spaceFive = $('#squarefive').text()
    gameOn.gameBoard.splice(5, 1, spaceFive)
    gameOn.switchToken()
    winCondition()
    $('#squarefive').off('click')
    turn++
  })

  $('#squaresix').on('click', function () {
    $('#squaresix').text(gameOn.playerToken)
    const spaceSix = $('#squaresix').text()
    gameOn.gameBoard.splice(6, 1, spaceSix)
    gameOn.switchToken()
    winCondition()
    $('#squaresix').off('click')
    turn++
  })

  $('#squareseven').on('click', function () {
    $('#squareseven').text(gameOn.playerToken)
    const spaceSeven = $('#squareseven').text()
    gameOn.gameBoard.splice(7, 1, spaceSeven)
    gameOn.switchToken()
    winCondition()
    $('#squareseven').off('click')
    turn++
  })

  $('#squareeight').on('click', function () {
    $('#squareeight').text(gameOn.playerToken)
    const spaceEight = $('#squareeight').text()
    gameOn.gameBoard.splice(8, 1, spaceEight)
    gameOn.switchToken()
    winCondition()
    $('#squareeight').off('click')
    turn++
  })
}

const winCondition = function () {
  if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[0] === gameOn.gameBoard[1] && gameOn.gameBoard[1] === gameOn.gameBoard[2] && gameOn.gameBoard[0] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[1])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[3] === gameOn.gameBoard[4] && gameOn.gameBoard[4] === gameOn.gameBoard[5] && gameOn.gameBoard[3] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[6] === gameOn.gameBoard[7] && gameOn.gameBoard[7] === gameOn.gameBoard[8] && gameOn.gameBoard[6] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[7])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[0] === gameOn.gameBoard[3] && gameOn.gameBoard[3] === gameOn.gameBoard[6] && gameOn.gameBoard[0] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[3])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[1] === gameOn.gameBoard[4] && gameOn.gameBoard[4] === gameOn.gameBoard[7] && gameOn.gameBoard[1] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[2] === gameOn.gameBoard[5] && gameOn.gameBoard[5] === gameOn.gameBoard[8] && gameOn.gameBoard[2] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[5])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[0] === gameOn.gameBoard[4] && gameOn.gameBoard[4] === gameOn.gameBoard[8] && gameOn.gameBoard[4] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn <= 8 && gameOn.gameBoard[2] === gameOn.gameBoard[4] && gameOn.gameBoard[4] === gameOn.gameBoard[6] && gameOn.gameBoard[4] !== '') {
    winDeclaration()
    winner.splice(0, 1, gameOn.gameBoard[4])
    isGameOver()
    endGame()
  } else if (winner[0] === '' && turn === 8) {
    drawDeclaration()
    isGameOver()
    endGame()
  } else {
    onMove()
  }
}

$('#reset-button').on('click', function () {
  resetBoard()
})

$('#sign-up').on('submit', function () {
  $('#first-form').hide()
})

$('#sign-in').on('submit', function () {
  $('#game-board').show()
  $('#second-form').hide()
  $('#first-form').hide()
  $('#third-form').show()
  $('#fourth-form').show()
  $('#fifth-form').show()
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameOn,
  resetBoard
}
