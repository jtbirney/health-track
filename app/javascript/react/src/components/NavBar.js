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
  }

  logOut(event) {
    event.preventDefault()
    this.props.logOut(this.props.userId)
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

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    let errorDiv
    let errorItems
    let currentErrors = this.props.errors
    if (this.props.errors) {
      errorItems = Object.entries(this.props.errors).map(error => {
        return(<p key={error[0]}>{error[1]}</p>)
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
          <h1 className='nav-bar-title'>Health Tracker</h1>
          {!this.props.user &&
            <div>
              <button onClick={this.toggleLogin} className='button-large'>
                <h1>Log In</h1>
              </button>
              <button onClick={this.toggleSignUpForm} className='button-large'>
                <h1>Sign Up</h1>
              </button>
            </div>
          }
          {this.props.user &&
            <div className='nav-bar-user'>
              <h1>{this.props.user}</h1>
              <button onClick={this.logOut} className='button-large'>
                <h1>Log Out</h1>
              </button>
            </div>
          }
        </div>
        <div>
          {errorDiv}
          {this.props.navForm === 'login' &&
            <div className='login-container'>
              <form onSubmit={this.logIn}>
                <input type='text' name='name' placeholder='Username' onChange={this.handleChange}></input>
                <input type='password' name='password' placeholder='Password' onChange={this.handleChange}></input>
                <input type='submit' value='Submit' className='button'/>
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
                <input type='submit' value='Submit' className='button'/>
              </form>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default NavBar
