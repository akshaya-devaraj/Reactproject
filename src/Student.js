import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div><h1>I am an {this.props.dept} Student</h1></div>
    )
  }
}
