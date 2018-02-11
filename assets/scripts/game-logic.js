// first attempt at game logic
let gameBoard = new Array(9).fill('') // leave it empty and push from DOM?

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

module.exports = {
  gameBoard,
  gameOn,
  emptyBoard
}
