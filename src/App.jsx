import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Menu from "./components/Menu";
import Search from "./components/Search";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [movie, setMoive] = useState([]);
  let moviesArray = [];
  const URL = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

  console.log(moviesArray);
  useEffect(() =>
    getData(), []
  )

  const getData = () => {
    fetch(URL)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        console.log(data);
        moviesArray = data.data.movies.map(item => (item));
        console.log(moviesArray);
      });
  };

  const handleChange = (e) => {
    const newUserInput = e.target.value;
    setUserInput(newUserInput);
  }

  return (

    <div className="container" >
      <Menu />
      <Search onChange={handleChange} onClick={getData} value={userInput} />
      <Movie movieInfo={moviesArray} />
    </div >
  );
};

export default App;
