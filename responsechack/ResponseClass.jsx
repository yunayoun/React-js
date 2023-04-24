
import React ,{ Component, useState } from 'react';


class ResponseClass extends Component{
state = {
  state:'waiting',
  message:'클릭시 시작',
  result:[],
}
onClickScreen=()=>{
  
}

  render(){
  return(
    <>
    <div
      id='screen'
      className={this.state.state}
      onClick={this.onClickScreen}
    > {this.state.message}
    </div>
    <div>평균시간: {this.state.result.reduce((a,c)=>a+c)/this.state.result.length}ms</div>
    </>
  )
}

}

export default ResponseClass;