import React, { Component } from 'react'
import EnComponent from './Hoc'

 class HoverCounter extends Component {
    
    render() {
      const{count,inc}=this.props
    return (
      <div>
      <h1 onMouseEnter={inc}>Hovercounter{count}</h1>
      </div>
    )
  }
  
  
}
export default EnComponent(HoverCounter);
