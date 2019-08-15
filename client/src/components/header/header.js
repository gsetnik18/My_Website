import React from 'react';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            buttons: [
                {"contents": "About Me"},
                {"contents": "My Portfolio"},
                {"contents": "My Blog"},
                {"contents": "Contact Me"}
            ]
         };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let i = e.target.id;
        this.setState(state => ({
            text: <p>`You have clicked the {i} button!`</p>
        })
        )
    }

    render() {
        return (
            <div>
                <div className="header-div" >
                    <button className="nav-buttons" id="about" onClick={this.handleClick}>{this.state.buttons[0].contents}</button>
                    <button className="nav-buttons" id="portfolio" onClick={this.handleClick}>{this.state.buttons[1].contents}</button>
                    <button className="nav-buttons" id="blog" onClick={this.handleClick}>{this.state.buttons[2].contents}</button>
                    <button className="nav-buttons" id="contact" onClick={this.handleClick}>{this.state.buttons[3].contents}</button>
                </div>
                <div className="new-div-holder">
                    {this.state.text}
                </div>
            </div>
        )
    }
};

export default Header;