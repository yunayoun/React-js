import React,{ Component } from "react";

class Try extends Component{

  render(){
    return(
      <li>
        <b>{this.props.value.color}</b> -{this.props.value.size}
        <div>content</div>
        <div>content</div>
        <div>content</div>
        <div>content</div>
      </li>
    )
  }
}

export default  Try;