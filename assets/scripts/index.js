'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameLogic = require('./game-logic')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$('.box').each(function () {

})

$(() => {
  $('#game-board-button').on('click', gameLogic.gameBoardSquares)
})

$('#squarezero').val(gameLogic.gameBoard[0])
$('#squareone').val(gameLogic.gameBoard[1])
$('#squaretwo').val(gameLogic.gameBoard[2])
$('#squarethree').val(gameLogic.gameBoard[3])
$('#squarefour').val(gameLogic.gameBoard[4])
$('#squarefive').val(gameLogic.gameBoard[5])
$('#squaresix').val(gameLogic.gameBoard[6])
$('#squareseven').val(gameLogic.gameBoard[7])
$('#squareeight').val(gameLogic.gameBoard[8])
