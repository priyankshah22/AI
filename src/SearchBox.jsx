import React from 'react';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import PaperclipUpload from './PaperclipUpload';
import './SearchBox.css';
import { useState } from 'react';
const SearchBox = ({ onSend, input, setInput }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSend(input);
            setInput("");

        }
    };

    return (

        <div className="searchBoxRow">
            <Input
                className="searchBox"
                type="text"
                placeholder="Enter Text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}

            />
            <FontAwesomeIcon icon={faPaperPlane} onClick={() => onSend(input)} className="sendButton" />
            <PaperclipUpload />
        </div>
    );
}

export default SearchBox;

