import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const items = [
        {
            title: 'What is React?',
            content: 'React is a JS libaray'
        },
        {
            title: 'What is React?',
            content: 'React is a JS libaray'
        },
        {
            title: 'What is React?',
            content: 'React is a JS libaray'
        }
    ];
    
    return (
        <div>
        
            <Search/>
            <Dropdown options={options}/>
        </div>
    )
};