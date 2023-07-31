import React,{ Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[{
  'id': '1',
  'image': 'https://picsum.photos/64/64',
  'name': '홍길동',
  'birthday': '392039',
  'gender': '남자',
  'job': '학생',
},{
  'id': '2',
  'image': 'https://picsum.photos/64/64',
  'name': '김철수',
  'birthday': '456722',
  'gender': '남자',
  'job': '엔지니어',
},{
  'id': '3',
  'image': 'https://picsum.photos/64/64',
  'name': '박춘향',
  'birthday': '123456',
  'gender': '여자',
  'job': '사업가',
}]

function App() {
  return (
    <>
    {
      customers.map(c=> {
        return(
        <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
        );     
      })
    }
    </>
  );
}

export default App;
