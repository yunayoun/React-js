import React,{ useState,useRef,useEffect } from "react";
const rspCoords ={
  바위:'0',
  가위 : '-142px',
  보 : '-284px',
}
const scores={
  바위:0,
  가위:1,
  보:-1,
}
const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

//                        result, imgCoord, score
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// componentDidMount() {
//   this.setState({
//     imgCoord: 3,
//     score: 1,
//     result: 2,
//   })
// }

// useEffect(() => {
//   setImgCoord();
//   setScore();
// }, [imgCoord, score]);
// useEffect(() => {
//   setResult();
// }, [result]);

const RSPHook =()=>{

  const [result,setResult]=useState('');
  const [score,setScore]= useState('0');
  const [imgCoord,setImgCoord] = useState(rspCoords.바위);
  const interval = useRef();

useEffect(()=>{//componentDidMount,DidUpdate역할(똑같은대응은아님)
  interval.current = setInterval(changeHand,1000);
  return()=>{//willUnmount
    clearInterval(interval.current);
  }
},[imgCoord])//실행할값만 effect 넣기.값이바뀌면 실행됨

const changeHand=()=>{
  if(imgCoord === rspCoords.바위){
    setImgCoord(rspCoords.가위)
  }else if(imgCoord === rspCoords.가위){
    setImgCoord(rspCoords.보)
  }else if(imgCoord === rspCoords.보){
    setImgCoord(rspCoords.가위)
  }
}
const onClickBtn=(choice)=>()=>{
  clearInterval(interval.current);
  const myChoice = scores[choice];
  const cpuChoice = scores[computerChoice(imgCoord)];

  const diff = myChoice-cpuChoice;
  if(diff===0){
    setResult('비겼습니다');
  }else if([-1,2].includes(diff)){
      setResult('이겼습니다')
      setScore((prevScore)=> prevScore +1)
  }else{
      setResult('졌습니다')
      setScore((prevScore)=>prevScore -1)
    };
    setTimeout(() => {
      interval.current = setInterval(changeHand,100);
      //멈추고나서 바로바뀌니 셋타임으로
    }, 1000);
  }

return(
  <>
  <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
  <div>
    <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
    <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
    <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
  </div>
  <div>{result}</div>
  <div>현재 {score}점</div>
  </>
)
}
export default RSPHook;