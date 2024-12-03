import React, { useState } from "react";
import moviesData from "./Data/moviesData";
import "./app.css";
import MovieDetails from "./Components/MovieDetails";
import MovieDisplay from "./Components/MovieDisplay";

const App = () => {
  const [movieList, setMovieList] = useState(null);

  return (
    <div className="app-container">
      <MovieDetails setMovieList={setMovieList} />
      <MovieDisplay movieList={movieList} />
    </div>
  );
};

export default App;