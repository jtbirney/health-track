import React, { Component } from 'react'

class WeightForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      date: '',
      weight: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateFields = this.validateFields.bind(this)
    this.addWeight = this.addWeight.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.validateFields(name, value)
    this.setState({ [name]: value })
  }

// the validations on this need improvement to validate weight is a number and date is a valid date
  validateFields(name, value) {
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
  }

  addWeight(event) {
    event.preventDefault()
    if (this.state.weight !== '' && this.state.date !== '') {
      let payload = {
        weight: this.state.weight,
        date: this.state.date
      }
      this.props.fetchPostWeight(payload)
    } else {
      let newError = {}
      if (this.state.weight === '' || ' ') {
        Object.assign(newError, { weight: `Weight cannot be blank`})
      }
      if (this.state.date === '' || ' ') {
        Object.assign(newError, { date: `Date cannot be blank`})
      }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
    }
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
      <div className='weight-form'>
        {errorDiv}
        <form onSubmit={this.addWeight}>
          <input type='text' name='weight' placeholder='Weight' onChange={this.handleChange} value={this.state.weight}></input>
          <input type='text' name='date' placeholder='Date' onChange={this.handleChange} value={this.state.date}></input>
          <input type='submit' value='Submit' className='button'/>
        </form>
      </div>
    )
  }
}

export default WeightForm
