import React from 'react';
import { Input } from 'antd';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import RightSideUpload from './RightSideUpload';

const InputBox = ({ value, onChange, onSend }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSend();
        }
    }

    return (

        <div className="enterText">
            <Input
                className="enterText"
                type="text"
                placeholder="Enter Text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}

            />
            <button className="buttonSend" onClick={onSend}>
                <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '5px' }} />

            </button>
            <RightSideUpload />
        </div>
    );
}

export default InputBox;

