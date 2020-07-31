import React from 'react';

//poster={poster} title={title} year={year} rating={rating}


const Movie = ({ movieInfo }) => {
    console.log(movieInfo);
    return (
        <div>{movieInfo}</div>
    )
}

export default Movie;