import React from 'react';
import { Select } from 'antd';
import './SelectApp.css';

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const SelectApp = () => (
    <Select
        showSearch
        placeholder="Select an App"
        className="selectApp"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
            {
                value: 'taskApp',
                label: 'Test App',
            },
            {
                value: 'healpdesk',
                label: 'Helpdesk',
            },
            {
                value: 'pto',
                label: 'PTO',
            },
        ]}
    />
);
export default SelectApp;