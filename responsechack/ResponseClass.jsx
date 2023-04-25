
import React ,{ Component } from 'react';


class ResponseClass extends Component{
state = {
  state:'waiting',//className
  message:'클릭시 시작',
  result:[],
}
timeout;
startTime;
endTime;

onClickScreen=()=>{
  const { state, message,result} = this.state;
  if(state ==='waiting'){
    this.setState({
      state: 'ready',
      message: '초록색이면 클릭'
    });
    this.timeout = setTimeout(() => {
      this.setState({
        state: 'now',
        message: '지금 클릭'
      });
      this.startTime = new Date();
    }, Math.floor(Math.random()*1000)+2000);
  }else if(state==='ready'){//미리눌렀을때
    clearTimeout(this.timeout);
    this.setState({
      state:'waiting',
      message:'빨랐어요.다시시작',
    })
  }else if(state === 'now'){//반응속도체크
    this.endTime = new Date()
    this.setState((prevState)=>{
    return{
      state:'waiting',
      message:'클릭시 시작',
      result:[...prevState.result, this.endTime-this.startTime ],
      }
      })
    };
  }

  resetBtn=()=>{
    this.setState({
      result:[],
    })
  }

renderAverage=()=>{//리엑트 조건문을 삼항연산자 or 보호연산자
  const {result} = this.state;
  return result.length===0 ?
  null 
  :
  <>
  <div>평균시간: {this.state.result.reduce((a,c)=>a+c)/this.state.result.length}ms</div>
  <button onClick={this.resetBtn}>Reset</button>
  </>
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
    {this.renderAverage()}

    </>
  )
}

}

export default ResponseClass;