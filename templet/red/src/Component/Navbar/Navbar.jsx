import React,{useState} from 'react';
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {BiMenu} from 'react-icons/bi';

function Navbar() {
  const [active,setActive] = useState('navbar');
  const showMenu = ()=>{
      setActive('navbar displayMenu');
  }
  const closeMenu =()=>{
    setActive('navbar');
  }
  return (
    <>
    <header className="header">
      <div className="logo">
        <h2>nabnab</h2>
      </div>
      <div className={active}>
        <ul onClick={closeMenu} className="navMenu">
          <li className="navItem">
            <a href="#home" className='navLink'>Home</a>
          </li>
          <li className="navItem">
            <a href="#about" className='navLink'>About</a>
          </li>
          <li className="navItem">
            <a href="#contact" className='navLink'>Contact</a>
          </li>
          <li className="navItem">
            <a href="#services" className='navLink'>Services</a>
          </li>
        </ul>
        <div onClick={closeMenu} className="closeIcon">
          <AiFillCloseCircle className='icon'/>
        </div>
      </div>

      <div onClick={showMenu} className="toggleIcon">
        <BiMenu className='icon'/>
      </div>

    </header>
    </>
  )
}

export default Navbar