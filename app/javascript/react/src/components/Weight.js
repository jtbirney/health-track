import React, { Component } from 'react'
import WeightForm from './WeightForm'
import WeightGraph from './WeightGraph'

class Weight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 500
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({
        width: 460
      })
    } else if (window.innerWidth > 1020) {
      this.setState({
        width: 800
      })
    } else {
      let newWidth = window.innerWidth - 240
      this.setState({
        width: newWidth
      })
    }
  }

  componentDidMount() {
    this.props.fetchWeights()
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  render() {
    return(
      <div className='body'>
        <h1>Your Weight</h1>
        <div>
          <WeightForm
            errors={this.props.errors}
            fetchPostWeight={this.props.fetchPostWeight}
          />
          <WeightGraph
            weights={this.props.weights}
            size={this.state.width}
          />
        </div>
      </div>
    )
  }
}

export default Weight
