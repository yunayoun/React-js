import { Component, createRef } from "react";
import  ReactDOM  from "react-dom/client";
import React from "react";
import TryClass from "./TryClass";

function getNumber(){//숫자4개랜덤
const candidate = [1,2,3,4,5,6,7,8,9];
const array=[];
for(let i=0;i<4;i++){
  const chosen=candidate.splice(Math.floor(Math.random()*candidate.length),1)[0];
  array.push(chosen)
  console.log(array)
}
return array;
}// 밖에있는지안에있는지 차이는 this 사용하면 안에있어야한다. 안에 다 넣어도 되는데 this가 없고 다르곳에서도 사용가능수도있을땐 밖에둠
class BaseBall extends Component{
state={
  result:'',
  value:'',
  answer:getNumber(),
  tries:[],//push하면안됨.렌더링되기위해서 예전state ...가져오고 그다음 새로운거넣기
}
onSubmitForm= (e)=>{
  const {value,answer,tries} = this.state;//비구조화할당

  e.preventDefault();
  if(value === answer.join('')){
    this.setState((prevState)=>{//과거state을 현재state로할땐 함수형setState
      return{
      result:'홈런',
      tries:[...prevState.tries,{try:value,result:'홈런'}],
    }
  })
  alert('게임을다시시작합니다');
  this.setState({
    value:'',
    answer:getNumber(),
    tries:[],
  })
  this.inputRef.current.focus()
  }else{//답틀렸을때
    const arrayAnswer = value.split('').map((v)=>parseInt(v));
    let strike =0;
    let ball = 0;
    if(tries.length >=9){//10이상틀렸을때
      this.setState({
        result: `실패 답은 ${answer.join('')}`,
      })
      alert('다시시작합니다')
      this.setState({
        value:'',
        answer:getNumber(),
        tries:[],
      });
    }else{
      for(let i =0; i<4; i+=1){
        if(arrayAnswer[i] === answer[i]){
          strike +=1;
        }else if(answer.includes(arrayAnswer[i])){
          ball +=1;
        }
      }
      this.setState((prevState)=>{
        return{
          tries:[...prevState.tries,{try:value,result:`${strike}스트라이크 ${ball}볼`}],
          value:'',
        };
      });
    this.inputRef.current.focus()
    }
  }
};
onChangeInput= (e)=>{
  this.setState({
    value: e.target.value,
  })
};

// inputRef;
// onInputRef= (c)=>{ this.inputRef = c}--함수여서 다른동작까지 가능함.
//createRef 사용하면 hook이랑 같이 current접근가능
inputRef = createRef();

  render(){
    return(
    <>
      <div>{this.state.result}</div>
      <form onSubmit={this.onSubmitForm}>
        <input ref={this.InputRef} type="number" maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
      </form>
      <div>시도:{this.state.tries.length}</div>
      <ul>
        {this.state.tries.map((v,i)=>{
          return (
            <TryClass key={`%{i+1}차 시도`} tryInfo={v}/>
          )
        }
        )}
      </ul>
    </>
  )}
}
export default  BaseBall;