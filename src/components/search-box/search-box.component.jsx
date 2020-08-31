import React from 'react';

import './search-box.styles.css';

const searchBox = ({placeholder, handleChange}) => (
    <input
    className="search"
    type='search' 
    placeholder={placeholder}
    onChange={handleChange} 
    />
);

export default searchBox;