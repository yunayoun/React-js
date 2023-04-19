import { Component } from "react";
import  ReactDOM  from "react-dom/client";
import React from "react";
import Try from "./Try";

function getNumber(){//숫자4개랜덤

}

class BaseBall extends Component{
state={
  result:'',
  value:'',
  answer:getNumber(),
  tries:[],
}
onSubmitForm= ()=>{

}
onChangeInput= ()=>{

}
TryColor =[
  {color:'red',size:'small'},
  {color:'yellow',size:'small'},
  {color:'blue',size:'large'},
  {color:'pink',size:'small'},
]

  render(){
    return(
    <>
      <div>{this.state.result}</div>
      <form onSubmit={this.onSubmitForm}>
        <input type="number" maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
      </form>
      <div>시도:{this.state.tries.length}</div>
      <ul>
        {this.TryColor.map((v)=>{
          return (
            <Try key={v.color} value={v}/>
          )
        }
        )}
      </ul>
    </>
  )}
}
export default  BaseBall;