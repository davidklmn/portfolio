import './navigation.css'
import {ReactComponent as Logo} from '../pictures/davidklmn_logo.svg';
import {ReactComponent as Message} from '../pictures/message.svg';
import { useState } from 'react';

export default function Navigation(){

  const [toggle, setToggle] = useState('false');
  const [menu, setMenu] = useState('Menu')

  function menuToggle(){
    const navToggle = document.querySelector('.nav-toggle');

    if(toggle === 'false'){
      setToggle('true')
      navToggle.classList.add('toggle-open')
     } else {
      setToggle('false')
      navToggle.classList.remove('toggle-open')
    }
    if(menu === 'Menu'){
      setMenu('Close')
    } else {
      setMenu('Menu')
    }
  }

  return (
    <nav>
      <div className="nav-container">
        <a href='/'><Logo className='logo'/></a>
        <button onClick={menuToggle} className='nav-toggle' aria-controls='primary-navigation' aria-expanded='false'><span className='menu-button'>{menu}</span></button>
        <div className='navlink' data-visible={toggle}>
          <ul id='primary-navigation'>
            <div><a onClick={menuToggle} href='#home'>Home</a></div>
            <div><a onClick={menuToggle} href='#about'>About</a></div>
            <div><a onClick={menuToggle} href='#projects'>Projects</a></div>
            <div><a onClick={menuToggle} href='#skills'>Skills</a></div>
            <div><a onClick={menuToggle} href='#contact'>Contact</a></div>
          </ul>
        </div>
        <div className='cta-container'>
            <Message className='message'/>
            <a href='#hireme'>Hire Me!</a>
        </div>
      </div>
    </nav>
  );
}