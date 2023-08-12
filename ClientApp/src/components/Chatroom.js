import React, { Component } from 'react';
import SendMessageForm from './SendMessageForm';

export class Chatroom extends Component {
    static displayName = Chatroom.name;
    // Create a constructor
    constructor(props) {
        super(props);
        // adds objects to the class
        this.state = {
            // messages is an object that can be accessed and manipulated in the React component
            messages: []
        };
        this.messageListRef = React.createRef();
    }

    // message handler on new message
    handleSendMessage = (newMessage) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, newMessage]
        }), () => {
            if (this.messageListRef.current) {
                this.messageListRef.current.scrollTop = this.messageListRef.current.scrollHeight;
            }
        });
    };

    render() {
        // Take the 'messages' object list from this.state
        const { messages } = this.state;

        return (
            <div className="chatroom">
                <h1>Welcome to Rice Chat!</h1>
                <div className="message-list" ref={this.messageListRef}>
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            {message.user}: {message.text}
                        </div>
                    ))}
                </div>
                <SendMessageForm onSendMessage={this.handleSendMessage} />
            </div>
        );
    }
}

export default Chatroom;