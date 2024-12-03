import moviesData from "../Data/moviesData";

const MovieDetails = ({setMovieList}) => {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul>
        {moviesData.map(item => (
          <li key={item.title}>
            <p onClick={() => setMovieList(item)}>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;