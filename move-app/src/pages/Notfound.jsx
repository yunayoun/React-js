import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Notfound() {
  const navigate = useNavigate();

  return (
    <div className='page-container'>
      <div style={{
        fontWeight:'600',
        fontSize:'48px',
        marginTop:'64px',
        marginBottom:'32px',
      }}>해당페이지를 찾을수없습니다.</div>
      <div style={{
        fontSize:'24px',
        lineHeight:1.5,
      }}>주소가 잘못되었거나 더이상 제공하지 않는페이지입니다.</div>
      <div 
        onClick={()=>navigate('/')}
        style={{
        fontSize:'24px',
        lineHeight:1.5,
        color:'red',
        cursor:'pointer',
      }}>메인페이지로 이동</div>
    </div>
  )
}
