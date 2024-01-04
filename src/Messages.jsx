import React from "react";
import { useState } from "react";
import './Messages.css';

const Messages = ({ messages }) => {
    // const [input, setInput] = useState("");
    // const [messages, setMessages] = useState([]);
    return (
        <>
            <div className="messagesContainer" >
                {/* <ChatMessage messages={messages} /> */}
                {messages.map((message, index) => (
                    <div key={index} className={message.isUser ? "user-message" : "bot-message"}>
                        {message.text}
                    </div>
                ))}
            </div>
        </>
    );
};


export default Messages;