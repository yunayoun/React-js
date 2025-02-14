const React = require('react');
const { useState,useRef } = React;

const WordHook =()=>{
  const [word,setWord] = useState('강아지');
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const inputRef = useRef(null);
  
  const onSubmitForm = (e)=>{
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    }else{
      setResult('땡');
      setValue('');
      inputRef.current.focus();

    }
  }
  const onChangeInput=(e)=>{
    setValue(e.target.value)
  }
  
  
  return(
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자입력해</label>
        <input id='wordInput' className='wordInput' ref={inputRef} value={value} onChange={onChangeInput} />
        <button>클릭</button>
      </form>
      <div>{result}</div>
    </>
  )

}
module.exports = WordHook;