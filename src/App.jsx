import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Menu from "./components/Menu";
import Search from "./components/Search";
// import { data } from './data/movie';

const App = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputYear, setInputYear] = useState(0);
  const [inputRate, setInputRate] = useState(0);
  const [inputGenre, setInputGenre] = useState('');
  const [movie, setMoive] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const URL = "./data/movie.json";
  const URL = "https://yts.mx/api/v2/list_movies.json?sort_by=rating";
  // console.log(moviesArray);
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   console.log(data);
    //   setMoive(data.data.movies);
    //   setIsLoading(false);
    // }, 1000);
    fetch(URL)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setMoive(data.data.movies);
      });
  };

  const titleHandle = (e) => {
    const newInputTitle = e.target.value;
    setInputTitle(newInputTitle);
  }

  const yearHandle = (e) => {
    const newInputYear = e.target.value;
    setInputYear(newInputYear);
    console.log(inputYear)

  }

  const rateHandle = (e) => {
    const newInputRate = e.target.value;
    setInputRate(newInputRate);
  }

  const genreHandle = (e) => {
    const newInputGenre = e.target.value;
    setInputGenre(newInputGenre);
  }

  const renderMovieContent = () =>
    isLoading ? (
      <h1>Loading movies...</h1>
    ) : (
        <Movie
          movieInfo={movie}
          filter={{ title: inputTitle, year: inputYear, rate: inputRate, genre: inputGenre }}
        />
      );

  return (

    <div className="container" >
      <Menu />
      <Search value={inputTitle} searchTitle={titleHandle} searchYear={yearHandle} searchRating={rateHandle} searchGenre={genreHandle} />
      {renderMovieContent()}
    </div >
  );
};

export default App;












  // const handleClick = (e) => {
  //   e.preventDefault();

  //   if (inputTitle !== '') {
  //     searchByTitle();
  //   } else if (inputYear !== 0) {
  //     searchByYear();
  //   } else if (inputRate !== 0) {
  //     searchByRate();
  //   }

  // }

  // const searchByTitle = () => {
  //   let searchMovieArray = [];
  //   for (let i = 0; i < movie.length; i++) {
  //     let movieInfo = movie[i];
  //     if (movieInfo.title.search(inputTitle) !== -1) {
  //       searchMovieArray.push(movieInfo);
  //     }

  //   }
  //   console.log(searchMovieArray);
  //   setMoive(searchMovieArray);
  // }

  // const searchByYear = () => {
  //   let searchMovieArray = [];
  //   for (let i = 0; i < movie.length; i++) {
  //     let movieInfo = movie[i];
  //     if (movieInfo.year === inputYear) {
  //       searchMovieArray.push(movieInfo);
  //     }
  //   }
  //   setMoive(searchMovieArray);
  // }

  // const searchByRate = () => {
  //   let searchMovieArray = [];
  //   for (let i = 0; i < movie.length; i++) {
  //     let movieInfo = movie[i];
  //     if (movieInfo.rating >= inputRate) {
  //       console.log(movieInfo)
  //       searchMovieArray.push(movieInfo);
  //     }
  //   }
  //   setMoive(searchMovieArray);
  // }