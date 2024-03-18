import logo from '../assets/logo.png';
import React, { useState } from 'react';

function Header() {

    const [selected, setSelected] = useState('home');
    let selectedValue = ['selected', '', '', ''];

    if (selected === 'home') {
        selectedValue = ['selected', '', '', ''];
    } else if (selected === 'about') {
        selectedValue = ['', 'selected', '', ''];
    } else if (selected === 'projects') {
        selectedValue = ['', '', 'selected', ''];
    } else if (selected === 'resume') {
        selectedValue = ['', '', '', 'selected'];
    }

    return (
        <header>
            <img src={logo} alt='Roman Pretty'></img>
            <nav>
                <ul>
                    <li className={selectedValue[0]}><a href="#home" onClick={() => { setSelected('home') }}>Home</a>{selected === 'home' || selected === '' ? <hr /> : null}</li>
                    <li className={selectedValue[1]}><a href="#about" onClick={() => { setSelected('about') }}>About</a>{ selected === 'about' ? <hr/> : null }</li>
                    <li className={selectedValue[2]}><a href="#projects" onClick={() => { setSelected('projects') }}>Projects</a>{ selected === 'projects' ? <hr/> : null }</li>
                    <li className={selectedValue[3]}><a href="#resume" onClick={() => { setSelected('resume') }}>Resume</a>{ selected === 'resume' ? <hr/> : null }</li>
                </ul>
            </nav>
            <button>Contact Me</button>
        </header>
    )
}

export default Header