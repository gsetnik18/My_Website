import React from 'react';
import styles from './Welcome.scss';

const Welcome = () => {
  const handleClick =()=>{
    window.location.pathname = "/profile";
  }
  return (
    <div className="whole-div">
      <h1>Welcome!</h1>
      <p>The buttons on this page will toggle the settings for the body of the website. The user can adjust
        between Light or Dark Mode, Animated Transitions or Motion Sickness Friendly Mode, Large Type
        or Small Type, and others. Settings can be adjusted at any time by clicking the "Return to Settings" link
        in the navigation bar.
      </p>
      <p>Feel free to have a look around!</p>
      <button id="enter-site" onClick={handleClick}>Enter Site</button>
    </div>
  )
};

export default Welcome;