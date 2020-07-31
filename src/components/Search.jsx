import React from 'react';

const Search = ({ onChange, onClick, value }) => {
    return (
        <div className="search-bar">
            <input type="text" />
            <button type="submit" onClick={onClick} onChange={onChange} value={value}>Search</button>
        </div>
    )
}

export default Search;