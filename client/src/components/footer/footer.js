import React from 'react';
import style from './footer.css';

const Footer = () => {
    return (
        <div className="parent">
            <div className="phantom" style={style.phantom} />
            <div className="style" style={style.style}>
                <h7 className="text" style={style.text}>Copyright © 2019. All rights reserved</h7>
            </div>
        </div>
    )
};

export default Footer;