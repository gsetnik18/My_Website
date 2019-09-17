import React from 'react';
import styles from './contact.scss';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                name: "",
                email: "",
                message: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Contact Me</h2>
                <p>I would love to hear from you! I welcome any feedback, questions, comments, or suggestions. Feel free to reach out to me using this form, or any of my social media!</p>
                <form className="formDiv" onSubmit={this.handleSubmit} style={styles.formDiv}>
                    <label>
                        Name:
                    <br></br>
                        <input type="text" value={this.state.value.name} onChange={this.handleChange} placeholder="Your Name" />
                    </label>
                    <br></br>
                    <label>
                        Email:
                    <br></br>
                        <input type="email" value={this.state.value.email} onChange={this.handleChange} placeholder="Your Email" />
                    </label>
                    <br></br>
                    <label>
                        Message:
                    <br></br>
                        <textarea value={this.state.value.message} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
};

export default ContactForm;