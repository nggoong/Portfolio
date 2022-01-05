import React from 'react';
import './Header.css';

const Header = ()=> {
    return(
        <div className='header-container'>
        <nav className="global-nav">
			<div className="global-nav-links">
				<a href="temp" className="global-nav-item">Introduction</a>
				<a href="temp" className="global-nav-item">Skills</a>
				<a href="temp" className="global-nav-item">Projects</a>
				<a href="temp" className="global-nav-item">Contact</a>
			</div>
		</nav>
		<nav className="local-nav">
			<div className="local-nav-links">
				<a href="temp" className="logo-name">Portfolio</a>
				<a href="https://github.com/nggoong" target='blank'>GitHub</a>
				<a href="https://velog.io/@apro_xo" target='blank'>Blog</a>
				<a href="https://www.instagram.com/apro_xo/?hl=ko" target='blank'>Instagram</a>
			</div>
		</nav>
    </div>
    )
}


export default Header;