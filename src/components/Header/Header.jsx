import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ()=> {
    return(
        <>
        <nav className="global-nav">
			<div className="global-nav-links">
				<Link to={'/intro'} className='global-nav-item'>Introduction</Link>
				<Link to={'/skills'} className='global-nav-item'>Skills</Link>
				<Link to={'/projects'} className='global-nav-item'>Projects</Link>
				<Link to={'/contact'} className='global-nav-item'>Contact</Link>
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
    </>
    )
}


export default Header;