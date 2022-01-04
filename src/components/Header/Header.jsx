import React from 'react';
import './Header.css';

const Header = ()=> {
    return(
        <>
        <nav className="global-nav">
			<div className="global-nav-links">
				<a href="#" className="global-nav-item">Introduction</a>
				<a href="#" className="global-nav-item">Skills</a>
				<a href="#" className="global-nav-item">Projects</a>
				<a href="#" className="global-nav-item">Contact</a>
			</div>
		</nav>
		<nav className="local-nav">
			<div className="local-nav-links">
				<a href="#" className="product-name">Portfolio</a>
				<a href="#">GitHub</a>
				<a href="#">Blog</a>
				<a href="#">Instagram</a>
			</div>
		</nav>
    </>
    )
}


export default Header;