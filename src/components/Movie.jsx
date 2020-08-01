import React from 'react';

//poster={poster} title={title} year={year} rating={rating}

const Movie = ({ movieInfo, filter }) => {
    const { title, year, rate, genre } = filter;


    // filtering logic separated
    const shouldDisplayAll = title.length === 0 && Number(year) === 0 && Number(rate) === 0 && genre.length === 0; // special filter to decide whether to show all (only when page is rendered initially)

    // apply filters only when filter values are provided otherwise default to false
    // e.g.) title = 'Doctor' would end up like so: (true || false || false -> true) hence this one gets picked
    // since one of the filter values is provided the `data` variable becomes `getFilteredMovies()` instead of the original array
    // and `getFilteredMovies()` would return an array with movies whose title includes 'Doctor'
    const titleFilter = (movie) => title.length > 0 && movie.title.includes(title);
    const yearFilter = (movie) => Number(year) > 0 && movie.year === Number(year);
    const rateFilter = (movie) => Number(rate) > 0 && movie.rating >= Number(rate);


    // movie.genres is an array. so mapping this array then find arguments genre using inner function called includes().
    const genreFilter = (movie) => genre.length > 0 && movie.genres.map(a => a).includes(genre);

    // get filtered movie list
    const getFilteredMovies = () => movieInfo.filter((movie) => titleFilter(movie) || yearFilter(movie) || rateFilter(movie) || genreFilter(movie))

    // if no filter is provided return the original array otherwise get filtered movies
    const data = shouldDisplayAll ? movieInfo : getFilteredMovies();
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <img
                        src={
                            item.medium_cover_image
                        }
                        alt="movie-poster"
                    />
                    <h2>{item.title} ( {item.genres.map(a => a + ", ")} )</h2>

                    <h3>{item.year}</h3>
                    <h4>{item.rating}</h4>
                    <h4>{item.summary}</h4>
                </div>
            ))}
        </div>
    );
}

export default Movie;