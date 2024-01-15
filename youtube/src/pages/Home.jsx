import React from 'react'
import Main from '../components/section/Main'
import Developer from '../components/contentes/Developer'
import Today from '../components/contentes/Today'
import Webd from '../components/contentes/Webd'
import Website from '../components/contentes/Website'
import Gsap from '../components/contentes/Gsap'
import Portfolio from '../components/contentes/Portfolio'
import Youtube from '../components/contentes/Youtube'

function Home() {
  return (
    <Main 
      title='홈홈' 
      description='이건홈화면이야'
    >
      <Today/>
      <Developer/>
      <Webd/>
      <Website/>
      <Gsap/>
      <Portfolio/>
      <Youtube/>


    </Main>
  )
}

export default Home