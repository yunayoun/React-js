import React,{ Component } from "react";

//class lifecycle
//constructor-render-ref-componentDidMount-(setState,props바뀜)-shouldComponentDidUpdate(true)-render
// -componentDidUpdate-(부모가나를자식없애면)componentWillUnmount-소멸
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

class RSPClass extends Component{
state ={
  result:'',
  score:'0',
  imgCoord: rspCoords.바위,
}
interval;


componentDidMount(){//컴포넌트 첫렌더링후//비동기요청
  this.interval= setInterval(this.changeHand, 100);
  //초에한번씩실행하는데 컴포넌트를 없애도 사이트를 나가지않는이상 계속 진행됨.없앨때 clear해줘야함.
}
// componentDidUpdate(){//리렌더링후
// }
componentWillUnmount(){//컴포넌트제거되기 직전//비동기요청정리
  clearInterval(this.interval)//완료되지않은 비동기요청이있는경우 여기서 정리함.
}

changeHand=()=>{
  const {imgCoord}=this.state;//setInterval안에 써줘야함.클로져문제
    if(imgCoord === rspCoords.바위){
      this.setState({
        imgCoord: rspCoords.가위,
      });
    }else if(imgCoord === rspCoords.가위){
      this.setState({
        imgCoord:rspCoords.보,
      });
    }else if(imgCoord === rspCoords.보){
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  //고차함수
  // onClick={()=>this.onClickBtn('바위')}
  //리엑트에서 자바스크립트를 쓸때 함수를 사용해야하는데 ()=> 부분을 없애고 
  //함수선언하는데에 넣으면 똑같이 작동한다.onClickBtn=(choice)=>{}를 onClickBtn=(choice)=>()=>{} 이렇게 바꿈.

onClickBtn=(choice)=>()=>{
  clearInterval(this.interval);
  const {imgCoord}= this.state;
  const myChoice = scores[choice];
  const cpuChoice = scores[computerChoice(imgCoord)];

  const diff = myChoice-cpuChoice;
  if(diff===0){
    this.setState({
      result:'비겼습니다'
    });
  }else if([-1,2].includes(diff)){
    this.setState((prevState)=>{
      return {
      result:'이겼습니다',
      score :prevState.score +1,
    }
    });
  }else{
    this.setState((prevState)=>{
      return {
      result:'졌습니다',
      score :prevState.score -1,
    };
    });
  }
  setTimeout(() => {
    this.interval = setInterval(this.changeHand,100);
    //멈추고나서 바로바뀌니 셋타임으로
  }, 1000);
};

  render(){
    const { result, score, imgCoord} = this.state;
    return(
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }

};
export default RSP;
