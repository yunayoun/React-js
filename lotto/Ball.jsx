import React ,{memo} from "react";


//hook은 {useState} 사용할때
//
//함수컴퍼넌트(state를 안쓸경우 사용,pure컴퍼넌트 적용하고싶으면 memo)


const Ball=memo(({number}) =>{
  let background;
  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
  } else {
    background = 'green';
  }
  return(
    <>
    <div className="ball" style={{background}}>{number}</div>
    </>
    )
});


export default Ball;