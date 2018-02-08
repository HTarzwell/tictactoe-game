// first attempt at game board creation

const gameBoard = [
  ['', '', '', '', '', '', '', '', '']
]

// problems: 1: getting the array to be accessible (it's just empty slots right now)

gameBoard.forEach(function (element) {
  console.log(element)
})

// problems: 1.5: making the array accessible to the DOM (it's just sitting there right now)
// problems: 2: writing a function that iterates over the array
// problems: 3: writing a function that selects a specific array slot and checks if it is available (i.e has non-null property)
// problems: 4: writing a function that assigns a value to an empty space in the array and returns a warning if already assigned
// problems: 5: writing a function that varies the element assigned to the array slot depending on user (X and O)
// problems: 6: writing a function that tracks and determines a win condition (three in a row vertical, horizonal, diagonal)

// export game board
module.exports = {
  gameBoard
}
