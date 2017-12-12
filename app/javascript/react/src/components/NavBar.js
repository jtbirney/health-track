import React, { Component } from 'react'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    this.validateFields = this.validateFields.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  validateFields(name, value) {
  if (name !== "passwordConfirmation") {
    if (value === '' || value === ' ') {
      let label = name.charAt(0).toUpperCase() + name.slice(1)
      let newError = { [name]: `${label} cannot be blank`}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState[name]
      this.setState({ errors: errorState })
      return true
    }
  } else {
    if (value !== this.state.password) {
      let newError = { [name]: `Passwords do not match`}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState[name]
      delete errorState.password_confirmation
      this.setState({ errors: errorState })
      return true
    }
  }
}

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.validateFields(name, value)
    this.setState({ [name]: value })
  }

  toggleLogin(event) {
    event.preventDefault()
    this.props.toggleLogin()
  }

  toggleSignUpForm(event) {
    event.preventDefault()
    this.props.toggleSignUpForm()
  }

  logIn(event) {
    event.preventDefault()
    let formPayload = {
      user: {
        name: this.state.name,
        password: this.state.password
      }
    }
    this.props.logIn(formPayload)
    this.props.closeLogin()
  }

  logOut(event) {
    event.preventDefault()
    this.props.logOut()
    this.props.closeLogin()
  }

  createUser(event) {
    event.preventDefault()
    if (Object.keys(this.state.errors).length === 0) {
      let formPayload = {
        user: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirmation
        }
      }
      this.props.createUser(formPayload)
    }
  }

  render() {
    let errorDiv
    let errorItems
    let currentErrors = this.props.errors
    // look at recipe box to see how I handled the errors there.
    if (this.props.errors) {
      errorItems = Object.keys(this.props.errors).map(error => {
        debugger
        return(<p key={error}>{error} {currentErrors[error]}</p>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<p key={error}>{error}</p>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div>
        <div className='nav-bar-container'>
          <h1>Health Tracker</h1>
          <h1>{this.props.user}</h1>
          {!this.props.user &&
            <div>
              <button onClick={this.toggleLogin}>
                <h1>Log In</h1>
              </button>
              <button onClick={this.toggleSignUpForm}>
                <h1>Sign Up</h1>
              </button>
            </div>
          }
          {this.props.user &&
            <button onClick={this.logOut}>
              <h1>Log Out</h1>
            </button>
          }
        </div>
        <div>
          {errorDiv}
          {this.props.navForm === 'login' &&
            <div className='login-container'>
              <form onSubmit={this.logIn}>
                <input type='text' name='name' placeholder='Username' onChange={this.handleChange}></input>
                <input type='text' name='password' placeholder='Password' onChange={this.handleChange}></input>
                <input type='submit' value='Submit' />
              </form>
            </div>
          }
          {this.props.navForm === 'signUp' &&
            <div className='login-container'>
              <form onSubmit={this.createUser}>
                <input type='text' name='name' placeholder='Name' onChange={this.handleChange} />
                <input type='text' name='email' placeholder='Email'  onChange={this.handleChange} />
                <input type='text' name='password' placeholder='Password'  onChange={this.handleChange} />
                <input type='text' name='passwordConfirmation' placeholder='Confirm Password' onChange={this.handleChange} />
                <input type='submit' value='Submit' />
              </form>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default NavBar
