import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ()=> {
    return(
        <>
        <nav className="global-nav">
			<div className="global-nav-links">
				<Link to={'/about-me'} className='global-nav-item'>&#60;AboutMe/&#62;</Link>
				<Link to={'/skills'} className='global-nav-item'>&#60;Skills/&#62;</Link>
				<Link to={'/projects'} className='global-nav-item'>&#60;Projects/&#62;</Link>
				<Link to={'/contact'} className='global-nav-item'>&#60;Contact/&#62;</Link>
			</div>
		</nav>
		<nav className="local-nav">
			<div className="local-nav-links">
				<Link to="/" className='logo-name'>&#60;Header/&#62;</Link>
				<a href="https://github.com/nggoong" target='_blank'>GitHub</a>
				<a href="https://velog.io/@apro_xo" target='_blank'>Blog</a>
				<a href="https://www.instagram.com/apro_xo/?hl=ko" target='_blank'>Instagram</a>
			</div>
		</nav>
    </>
    )
}


export default Header;