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
  $('#sixth-form').hide()
})

let turn = 0

let winner = ['']

let gameOver = false

const gameOn = {
  gameBoard: new Array(9).fill(''),
  player: 1,
  playerToken: 'x',
  playToken: function () {
    if (this.player === 1) {
      this.playerToken = 'x'
      return this.playerToken
    } else if (this.player === 2) {
      this.playerToken = 'o'
      return this.playerToken
    }
  },
  switchPlayer: function () {
    if (this.player === 1) {
      this.player = 2
    } else if (this.player === 2) {
      this.player = 1
    }
  },
  checkSwitch: function () {
    if (this.player === 1 && this.playerToken === 'x') {
      this.switchPlayer()
      return this.player
    } else if (this.player === 2 && this.playerToken === 'o') {
      this.switchPlayer()
      return this.player
    }
  }
}

const resetBoard = function () {
  gameOn.gameBoard = new Array(9).fill('')
  gameOver = false
  data.game.over = false
  turn = 0
  winner = new Array(1).fill('')
  gameOn.player = 1
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
    data.game.over = true
  } else {
    $('.box').on('click')
    $('#game-message').text('Player X Ready')
    $('#game-message').css('background-color', 'blue')
  }
}

const winDeclaration = function () {
  $('#game-message').text('Game Winner: Player ' + gameOn.player)
  $('#game-message').css('background-color', 'green')
}

const drawDeclaration = function () {
  $('#game-message').text('Draw Game - Play Again!')
  $('#game-message').css('background-color', 'blue')
}

const onMove = function () {
  $('#game-message').text('Next move')
  $('#game-message').css('background-color', 'grey')
}

const allSquares = function () {
  $('#squarezero').on('click', function () {
    gameOn.playToken()
    $('#squarezero').text(gameOn.playerToken)
    const spaceZero = $('#squarezero').text() // build a function for array index + token
    gameOn.gameBoard.splice(0, 1, spaceZero)
    winCondition()
    gameOn.checkSwitch()
    $('#squarezero').off('click')
    data.game.cell.index = 0
    turn++
  })

  $('#squareone').on('click', function () {
    gameOn.playToken()
    $('#squareone').text(gameOn.playerToken)
    const spaceOne = $('#squareone').text()
    gameOn.gameBoard.splice(1, 1, spaceOne)
    winCondition()
    gameOn.checkSwitch()
    $('#squareone').off('click')
    data.game.cell.index = 1
    turn++
  })

  $('#squaretwo').on('click', function () {
    gameOn.playToken()
    $('#squaretwo').text(gameOn.playerToken)
    const spaceTwo = $('#squaretwo').text()
    gameOn.gameBoard.splice(2, 1, spaceTwo)
    winCondition()
    gameOn.checkSwitch()
    $('#squaretwo').off('click')
    data.game.cell.index = 2
    turn++
  })

  $('#squarethree').on('click', function () {
    gameOn.playToken()
    $('#squarethree').text(gameOn.playerToken)
    const spaceThree = $('#squarethree').text()
    gameOn.gameBoard.splice(3, 1, spaceThree)
    winCondition()
    gameOn.checkSwitch()
    $('#squarethree').off('click')
    data.game.cell.index = 3
    turn++
  })

  $('#squarefour').on('click', function () {
    gameOn.playToken()
    $('#squarefour').text(gameOn.playerToken)
    const spaceFour = $('#squarefour').text()
    gameOn.gameBoard.splice(4, 1, spaceFour)
    winCondition()
    gameOn.checkSwitch()
    $('#squarefour').off('click')
    data.game.cell.index = 4
    turn++
  })

  $('#squarefive').on('click', function () {
    gameOn.playToken()
    $('#squarefive').text(gameOn.playerToken)
    const spaceFive = $('#squarefive').text()
    gameOn.gameBoard.splice(5, 1, spaceFive)
    winCondition()
    gameOn.checkSwitch()
    $('#squarefive').off('click')
    data.game.cell.index = 5
    turn++
  })

  $('#squaresix').on('click', function () {
    gameOn.playToken()
    $('#squaresix').text(gameOn.playerToken)
    const spaceSix = $('#squaresix').text()
    gameOn.gameBoard.splice(6, 1, spaceSix)
    winCondition()
    gameOn.checkSwitch()
    $('#squaresix').off('click')
    data.game.cell.index = 6
    turn++
  })

  $('#squareseven').on('click', function () {
    gameOn.playToken()
    $('#squareseven').text(gameOn.playerToken)
    const spaceSeven = $('#squareseven').text()
    gameOn.gameBoard.splice(7, 1, spaceSeven)
    winCondition()
    gameOn.checkSwitch()
    $('#squareseven').off('click')
    data.game.cell.index = 7
    turn++
  })

  $('#squareeight').on('click', function () {
    gameOn.playToken()
    $('#squareeight').text(gameOn.playerToken)
    const spaceEight = $('#squareeight').text()
    gameOn.gameBoard.splice(8, 1, spaceEight)
    winCondition()
    gameOn.checkSwitch()
    $('#squareeight').off('click')
    data.game.cell.index = 8
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

const data = {
  game: {
    cell: {
      index: undefined,
      value: undefined
    },
    over: false
  }
}

$('#sign-up').on('submit', function () {
  $('#first-form').hide()
})

$('#sign-in').on('submit', function () {
  $('#sixth-form').show()
})

$('#new-game').on('submit', function () {
  $('#game-board').show()
  $('#second-form').hide()
  $('#first-form').hide()
  $('#third-form').show()
  $('#fourth-form').show()
  $('#fifth-form').show()
})

$('#new-game').on('submit', function () {
  resetBoard()
})

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  gameOn,
  resetBoard,
  data
}
