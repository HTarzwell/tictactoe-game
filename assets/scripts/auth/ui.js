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

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully Changed Password!')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const changePasswordFailure = function (error) {
  $('#message').text('Password Change Unsuccessful')
  $('#message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
