import React, { Component } from 'react';

class SendMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ newMessage: event.target.value });
    };

    handleFormSubmit = (event) => {
        // prevents the page from being reloaded
        event.preventDefault();

        const { newMessage } = this.state;
        if (newMessage.trim() !== '') {
            // Send message
            // TODO: fix to work with back-end
            this.props.onSendMessage({ user:"Keith", text: newMessage });
            this.setState({ newMessage: '' });
        }
    };

    render() {
        const { newMessage } = this.state;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <input
                    className="send-message"
                    type="text"
                    value={newMessage}
                    onChange={this.handleInputChange}
                    placeholder="Type your message..."
                />
                <button hidden type="submit">Send</button>
            </form>
        );
    }
}

export default SendMessageForm;
