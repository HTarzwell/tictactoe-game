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
    } else if (this.player === 2) {
      this.playerToken = 'o'
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
    } else if (this.player === 2 && this.playerToken === 'o') {
      this.switchPlayer()
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
    console.log(gameOver)
    data.game.over = true
    console.log('data game over is ', data.game.over)
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
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squarezero').off('click')
    data.game.cell.index = 0
    turn++
    gameOn.checkSwitch()
  })

  $('#squareone').on('click', function () {
    gameOn.playToken()
    $('#squareone').text(gameOn.playerToken)
    const spaceOne = $('#squareone').text()
    gameOn.gameBoard.splice(1, 1, spaceOne)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squareone').off('click')
    data.game.cell.index = 1
    turn++
    gameOn.checkSwitch()
  })

  $('#squaretwo').on('click', function () {
    gameOn.playToken()
    $('#squaretwo').text(gameOn.playerToken)
    const spaceTwo = $('#squaretwo').text()
    gameOn.gameBoard.splice(2, 1, spaceTwo)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squaretwo').off('click')
    data.game.cell.index = 2
    turn++
    gameOn.checkSwitch()
  })

  $('#squarethree').on('click', function () {
    gameOn.playToken()
    $('#squarethree').text(gameOn.playerToken)
    const spaceThree = $('#squarethree').text()
    gameOn.gameBoard.splice(3, 1, spaceThree)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squarethree').off('click')
    data.game.cell.index = 3
    turn++
    gameOn.checkSwitch()
  })

  $('#squarefour').on('click', function () {
    gameOn.playToken()
    $('#squarefour').text(gameOn.playerToken)
    const spaceFour = $('#squarefour').text()
    gameOn.gameBoard.splice(4, 1, spaceFour)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squarefour').off('click')
    data.game.cell.index = 4
    turn++
    gameOn.checkSwitch()
  })

  $('#squarefive').on('click', function () {
    gameOn.playToken()
    $('#squarefive').text(gameOn.playerToken)
    const spaceFive = $('#squarefive').text()
    gameOn.gameBoard.splice(5, 1, spaceFive)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squarefive').off('click')
    data.game.cell.index = 5
    turn++
    gameOn.checkSwitch()
  })

  $('#squaresix').on('click', function () {
    gameOn.playToken()
    $('#squaresix').text(gameOn.playerToken)
    const spaceSix = $('#squaresix').text()
    gameOn.gameBoard.splice(6, 1, spaceSix)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squaresix').off('click')
    data.game.cell.index = 6
    turn++
    gameOn.checkSwitch()
  })

  $('#squareseven').on('click', function () {
    gameOn.playToken()
    $('#squareseven').text(gameOn.playerToken)
    const spaceSeven = $('#squareseven').text()
    gameOn.gameBoard.splice(7, 1, spaceSeven)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squareseven').off('click')
    data.game.cell.index = 7
    turn++
    gameOn.checkSwitch()
  })

  $('#squareeight').on('click', function () {
    gameOn.playToken()
    $('#squareeight').text(gameOn.playerToken)
    const spaceEight = $('#squareeight').text()
    gameOn.gameBoard.splice(8, 1, spaceEight)
    winCondition()
    console.log(gameOn.playerToken)
    console.log(gameOn.player)
    $('#squareeight').off('click')
    data.game.cell.index = 8
    turn++
    gameOn.checkSwitch()
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
