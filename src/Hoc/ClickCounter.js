import React, { Component } from 'react'
import EnComponent from './Hoc'

 class ClickCounter extends Component {
    render() {
    return (
      <div>
      <button onClick={this.props.inc}>ClickCounter{this.props.count}</button>
      </div>
    )
  }
 
}
export default EnComponent(ClickCounter);
