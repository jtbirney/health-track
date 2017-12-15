import React, { Component } from 'react'
import d3, { scaleLinear, max, select } from 'd3'
import { line } from 'd3-shape';
import { axis } from 'd3-axis'

class WeightGraph extends Component {
  constructor(props) {
    super(props)
    this.createGraph = this.createGraph.bind(this)
    this.removeGraph = this.removeGraph.bind(this)
  }

  createGraph() {
    const data = this.props.weights
    let lines = data.map((weight, index, data) => {
      return( {source: weight, target: data[index + 1]} )
    })
    lines.pop()
    const node = select(this.node)
    const xScale = scaleLinear()
      .domain([data[0].date_numerical, data[data.length - 1].date_numerical])
      .range([0, this.props.size])
    const yScale = scaleLinear()
      .domain([0, 200])
      .range([0, this.props.size])

    node.selectAll("line")
     .data(lines)
     .enter()
     .append("line")

    node.selectAll("line")
     .data(lines)
     .exit()
     .remove()

    node.selectAll("line")
     .data(lines)
     .attr("x1", d => xScale(d.source.date_numerical))
     .attr("x2", d => xScale(d.target.date_numerical))
     .attr("y1", d => this.props.size - yScale(d.source.weight))
     .attr("y2", d => this.props.size - yScale(d.target.weight))
     .style("stroke", "#D3643B")
     .style("stroke-width", "4px");
  }

  removeGraph() {

  }

  componentDidUpdate() {
    if (this.props.weights.length > 0) {
      this.createGraph()
    }
  }

  render() {
    let weights
    if (this.props.weights) {
      weights = this.props.weights.map(weight => {
        return(<li key={weight.date + weight.weight}>{weight.weight} lbs. - {weight.date}</li>)
      })
    }

    return(
      <div className="weight-container">
        <svg
          ref={node => this.node = node}
          width={this.props.size}
          height={this.props.size}
          className="weight-graph"
        ></svg>
        <ul className="weight-list">
          {weights}
        </ul>
      </div>
    )
  }
}

export default WeightGraph
