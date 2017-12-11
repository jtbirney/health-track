import React, { Component } from 'react'

const NavBar = props => {
  let toggleLogin = (event) => {
    event.preventDefault()
    props.toggleLogin()
  }
  let createUser = (event) => {
    event.preventDefault()
    props.createUser()
  }

  return(
    <div>
      <div className='nav-bar-container'>
        <h1>Health Tracker</h1>
        <button onClick={toggleLogin}>
          <h1>Log In</h1>
        </button>
        <button onClick={createUser}>
          <h1>Sign Up</h1>
        </button>

      </div>
      {props.logInForm &&
        <div className='login-container'>
          <form>
            <input type='text' placeholder='Email'></input>
          </form>
        </div>
      }
    </div>
  )
}

export default NavBar
