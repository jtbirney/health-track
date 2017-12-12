/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import App from '../react/src/App'
import reducer from '../react/src/reducers'


document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware
    )
  )
  const appDiv = document.getElementById('app')
  const render = () => ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    appDiv
  )

  render()
  store.subscribe(render)
})
