import React from 'react';
import logo from '../assets/logo.png';

function Header() {
    return (
      <header>
            <img src={logo} alt='Roman Pretty'></img>
            <nav>
                <ul>
                    <li className='selected'><a href="#home">Home</a><hr></hr></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
            <button>Contact Me</button>
        </header>
    )
  }
  
  export default Header