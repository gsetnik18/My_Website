import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';

const Header = () => {
    return (
        <div className="headerDivWrapper" style={styles.headerDivWrapper}>
            <div className="headerDiv" style={styles.headerDiv}>
                <div className="pageLink pageTitle" style={styles.pageTitle}>
                    404: Title Not Found
                </div>
                <span>
                    <Link className="pageLink" style={styles.pageLink} to="/profile">About Me</Link>
                    <Link className="pageLink" style={styles.pageLink} to="/portfolio">Portfolio</Link>
                    <Link className="pageLink" style={styles.pageLink} to="/blog">Blog</Link>
                    <Link className="pageLink" style={styles.pageLink} to="/contact">Contact Me</Link>
                    <Link className="pageLink" style={styles.pageLink} to="/">Return to Settings</Link>
                </span>
            </div>
        </div>
    )
};

export default Header;