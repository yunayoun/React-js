
import React,{ PureComponent } from "react";

class RenderTest extends PureComponent{
state = {
  counter:0,
  string:'hihi',
  number: 1,
  Boolean: true,
  object: {},
  array:[],
}

//------
// shouldComponentUpdate(nextProps,nextState,nextContext){
// if(this.state.counter!==nextState.counter){
//   return true;
// }
//   return false;
// }
//클릭시 변화되는게 없지만 setState가 실행되면서 렌더링이 계속된다.
//그래서 should 로 렌더링기준을 정해줘서 최적화시킴
//다른방법으론 PureComponent 로 하면 should기능 이 들어가있음
//객체나 배열같은경우 자료구조가 복잡하면 못읽을수있으므로 배열안에객체안에배열 이런식X
//--------
//렌더링이 되는 조건은 props,setState,부모가렌더링하면 자식도 렌더링되므로
//class=pureComponent, hook = memo



onClick = ()=>{
  this.setState({
    array:[],
  })
}
  render(){
    console.log('랜더링',this.state)
    return(
    <div>
      <button onClick={this.onClick}>클릭</button>
    </div>
    )
  }
}
export default  RenderTest;