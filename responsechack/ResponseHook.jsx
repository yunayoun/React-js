import React ,{ useState,useRef } from 'react';


const ResponseHook =()=>{
  const [state,setState]=useState('waiting');
  const [message,setMessage] = useState('클릭시 시작');
  const [result,setResult] = useState([]);
  const startTime= useRef('null');
  const endTime = useRef();
  const timeout = useRef();
  //class this를 ref로 해준다.current
  //state는 바뀌면 렌더링되는데 ref는 렌더링안됨.dom말고 값이바뀌기는하지만 화면은 안바뀌고싶을때 사용

const onClickScreen=()=>{
    if(state === 'waiting'){
      setState('ready');
      setMessage('초록색이면 클릭');

    timeout.current = setTimeout(()=>{
      setState('now')
      setMessage('지금 클릭')
      startTime.current = new Date();
    },Math.floor(Math.random()*1000)+2000);
    }else if(state === 'ready'){
      clearTimeout(timeout.current)
      setState('waiting')
      setMessage('빨랐어요.다시시작')
    }else if(state === 'now'){
      endTime.current = new Date();
      setState('waiting')
      setMessage('클릭시시작')
      setResult((prevResult)=>{
        return [...prevResult,endTime.current-startTime.current]
      })
    }
  }
const resetBtn= ()=>{
    setResult([])
  }
const renderAverage=()=>{
    return result.length === 0 ?
    null
    :
    <>
    <div>평균시간:{result.reduce((a,c)=>a+c)/result.length}ms</div>
    <button onClick={resetBtn}>리셋</button>
    </>
  }
  //함수선언을하든지 아님 바로 쓰던지
  //if,for문사용할때 함수에선 사용가능하니까 {(()=>{
  //if(result.length ==== 0){
  //return null;
  // }else{
  //   return <>
  //   <div>평균시간:{result.reduce((a,c)=>a+c)/result.length}ms</div>
  //   <button onClick={resetBtn}>리셋</button>
  //   </>
  // }
  // })()}  즉시실행하니까()
  
  return(
    <>
    <div id='screen'
    className={state}
    onClick={onClickScreen}
    >{message}</div>
    {renderAverage()}
    </>
  )

}
export default ResponseHook;