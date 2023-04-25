import  ReactDOM  from "react-dom/client";
import React from "react";
import { useState} from "react";
import Try from "./Try";

function getNumber(){//숫자4개랜덤
  console.log('hi')//입력할때계속실행되는이유는value값이 계속바뀌어서함수가실행됨.최적화로 따로해줘야함
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array=[];
  for(let i=0;i<4;i++){
    const chosen=candidate.splice(Math.floor(Math.random()*candidate.length),1)[0];
    array.push(chosen)
    console.log(array)
  }
  return array;
  }

const BaseBallHook =()=>{

const [value,setValue]= useState('');
const [result,setResult]= useState('');
const [answer,setAnswer]= useState(getNumber);//lazy init
const [tries,setTries]= useState([]);

const onSubmitForm = (e)=>{
  e.preventDefault();
  if(value === answer.join('')){
    setTries((prevTries)=>([
      ...prevTries,
      {try:value,result:'홈런'}
    ]))
    setResult('홈런')
    alert('게임을다시시작합니다');
    setValue('');
    setAnswer(getNumber());
    setTries([]);
  }else{
    const arrayAnswer = value.split('').map((v)=>parseInt(v));
    let strike =0;
    let ball = 0;
    if(tries.length >=9){//10이상틀렸을때
      setResult(`실패 답은 ${answer.join('')}`)
      alert('다시시작합니다');
      setValue('');
      setAnswer(getNumber());
      setTries([]);
    }else{
      for(let i =0; i<4; i+=1){
        if(arrayAnswer[i] === answer[i]){
          strike +=1;
        }else if(answer.includes(arrayAnswer[i])){
          ball +=1;
        }
      }
      setTries((prevTries)=>([
        ...prevTries,
        {try:value,result:`${strike}스트라이크 ${ball}볼입니다`}
      ]))
      setValue('')
    }
  }
};
const onChangeInput= (e)=>{
    setValue(e.target.value)
};


  return(
    <>
    <div>{result}</div>
    <form onSubmit={onSubmitForm}>
      <input 
      maxLength={4}
      value={value} 
      onChange={onChangeInput} />
    </form>
    <div>시도:{tries.length}</div>
    <ul>
      {tries.map((v,i)=>{
        return(
          <Try key={`%{i+1}차 시도`} tryInfo={v}/>
        )
      })}
    </ul>
    </>
  )
}




export default BaseBallHook;