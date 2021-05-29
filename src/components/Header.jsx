/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id="main">
        <Navbar/>
        <div className="name">
        <h1><span>Landing Page Minions</span></h1>
        <p className='detalis'>Seres amarelos milenares, os minions têm uma missão: servir aos maiores vilões.</p>
        
        <a href='#' className='cv-btn'> Saiba Mais </a>
        </div>
            
        </div>
    )
}

export default Header;

