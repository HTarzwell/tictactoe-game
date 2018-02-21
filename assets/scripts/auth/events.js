'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault() // prevents page from refreshing!!
  const data = getFormFields(this)
  console.log('data is', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up input[type="text"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data is', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in input[type="text"]').val('')
  $('#sign-in input[type="password"]').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data is', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password input[type="password"]').val('')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  const data = getFormFields(this)
  console.log('data is', data)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $(document).ready(onCreateGame)
  $('#reset-button').on('click', onCreateGame)
}

module.exports = {
  addHandlers
}
