import React,{useCallback, useEffect, useMemo, useRef, useState} from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}
//usecallback-함수를기억
//usememo-복잡한함수결과값기억
//useref - 일반값기억

//hook 최상위로빼서 실행순서가중요,조건문안에넣지마시오
const LottoHook =()=>{

const lottoNumbers = useMemo(()=>getWinNumbers(),[])
//hook는전체가 재실행되서 getwinnumbers 계속실행되니 메모에 저장해서 사용,빈배열이면 한번만실행
const [winNumbers,setWinNumbers] = useState(lottoNumbers);
const [winBalls,setWinBalls] = useState([]);
const [bonus,setBonus] = useState(null);
const [redo,setRedo] = useState(false)
const timeouts = useRef([]);

useEffect(()=>{
  console.log('useeffect')
  for(let i=0; i< winNumbers.length;i++){
    timeouts.current[i]=setTimeout(()=>{
      setWinBalls((prevBalls)=>
        [...prevBalls, winNumbers[i]]);
    },(i+1)* 1000);
  }
  timeouts.current[6] = setTimeout(() => {
    setBonus(winNumbers[6]);
    setRedo(true);
  }, 7000);

  return()=>{//willdidunmount
    timeouts.current.forEach((v)=>{
      clearTimeout(v)
    });
  };
},[timeouts.current])

//class처럼 winball.length를 하면 effect는 두개를 동시에 수행해서 두번실행됨.
//빈배열이면 didmount랑 동일//요소가있으면 didmount,didupdate 둘두수행


const onClickRedo = useCallback(()=>{
  console.log('onclickredo');
  console.log(winNumbers);
  setWinNumbers(getWinNumbers());
  setWinBalls([]);
  setBonus(null)
  setRedo(false)
  timeouts.current=[];
},[winNumbers]);
//ref,callback,effect 는 (()=>{},[]) 형식이다
//리엑트6-5
//자식컨퍼넌트에 함수를 props넘길때는 콜백필수

  return(
    <>
    <div>당첨 숫자</div>
    <div id="결과창">
      {winBalls.map((v) => <Ball key={v} number={v} />)}
    </div>
    <div>보너스!</div>
    {bonus && <Ball number={bonus} onClick={onClickRedo} />}
    {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  )
}


export default LottoHook;