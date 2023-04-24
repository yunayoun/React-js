
import React,{ Component } from "react";

class TryClass extends Component{

  render(){
    const { tryInfo} = this.props
    return(
      <li>
        <b>{tryInfo.try}</b>
        <div>{tryInfo.result}</div>
      </li>
    )
  }
}
export default  TryClass;