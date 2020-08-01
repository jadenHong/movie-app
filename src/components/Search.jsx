import React from 'react';

const Search = ({ searchTitle, searchYear, searchRating }) => {
    return (
        <form className="search-bar">
            <label>Title: </label>
            <input type="text" className="input-title" onChange={searchTitle} />
            <label>Year: </label>
            <input type="text" className="input-year" onChange={searchYear} />
            <label>Rating: </label>
            <input type="text" className="input-genre" onChange={searchRating} />
        </form>
    )
}

export default Search;