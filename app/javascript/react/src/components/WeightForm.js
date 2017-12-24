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
    this.validateDate = this.validateDate.bind(this)
    this.validateWeight = this.validateWeight.bind(this)
    this.addWeight = this.addWeight.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    if (name === 'weight') {
      if (this.validateWeight(value)) {
        this.setState({ [name]: value })
      }
    } else {
      this.setState({ [name]: value })
    }
  }

  validateDate(value) {
    let dateValue = Date.parse(value)
    if (!dateValue) {
      let newError = { date: 'Please enter a valid date'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.date
      this.setState({ errors: errorState })
      return true
    }
  }

  validateWeight(value) {
    console.log(value);
    if (value === '') {
      let newError = { weight: 'Weight cannot be blank'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return true
    } else if (parseFloat(value).toString() !== value) {
      let newError = { weight: 'Weight must be a number'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else if (parseFloat(value) > 1000) {
      let newError = { weight: 'Weight cannot be greater than 1000lbs.'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.weight
      this.setState({ errors: errorState })
      return true
    }
  }

  addWeight(event) {
    event.preventDefault()
    if (this.validateDate(this.state.date) && this.validateWeight(this.state.weight)) {
      let payload = {
        weight: this.state.weight,
        date: this.state.date
      }
      this.props.fetchPostWeight(payload)
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
