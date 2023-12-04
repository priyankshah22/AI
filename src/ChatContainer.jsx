import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import InputBox from './InputBox';
import './styles.css';
const ChatContainer = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        const response = "response test";
        setMessages([
            ...messages,
            { text: input, isUser: true },
            { text: response, isUser: false },
        ]);
        setInput("");
    };

    return (
        <>
            <div className="ChatContainer">
                <ChatMessage messages={messages} className="child1" />
                <InputBox value={input} onChange={setInput} onSend={handleSend} className="child2" />

            </div>
        </>
    );
};

export default ChatContainer;
