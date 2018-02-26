'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Sign-Up Successful!')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error On Sign-Up')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#message').text('Successfully Signed In!')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Invalid Sign In')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully Changed Password!')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function (error) {
  $('#message').text('Password Change Unsuccessful')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#message').text('Successfully Signed Out')
  $('#message').css('background-color', 'green')
}

const signOutFailure = function (error) {
  $('#message').text('Sign Out Unsuccessful')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const createGameSuccess = function (data) {
  $('#message').text('New Game Data Start!')
  $('#message').css('background-color', 'green')
  console.log('CreateGame success is here!')
  store.game = data.game
  console.log('New Game Data is ', data.game)
}

const createGameFailure = function (error) {
  $('#message').text('Something Went Wrong...')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const updateGameSuccess = function (data) {
  console.log('made it to ui updateGameSuccess')
  console.log('data is ', data)
}

const updateGameFailure = function (error) {
  $('#message').text('Something Went Wrong...')
  $('#message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
