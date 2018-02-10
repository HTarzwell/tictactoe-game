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

$(() => {
  console.log('gameBoard is', gameLogic.gameBoard)
  $('#game-board').on('click', gameLogic.gameBoardSquares)
})
