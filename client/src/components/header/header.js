import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header-div">
                <button className="nav-buttons" id="about">About Me</button>
                <button className="nav-buttons" id="portfolio">Portfolio</button>
                <button className="nav-buttons" id="blog">Blog</button>
                <button className="nav-buttons" id="contact">Contact Me</button>
            </div>
        )
    }
};

export default Header;