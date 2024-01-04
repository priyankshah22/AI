import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import './PaperclipUpload.css'
const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    progress: {
        strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
        },
        strokeWidth: 3,
        format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
};

<FontAwesomeIcon icon="fa-solid fa-paperclip" />
const PaperclipUpload = () => (
    <Upload {...props} >
        <FontAwesomeIcon icon={faPaperclip} className="paperclipUpload" />
    </Upload>
);
export default PaperclipUpload;