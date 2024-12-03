const MovieDisplay = ({movieList}) => {
  return (
    <div className="movie-display">
      {movieList !== null && (
        <div className="movie-info">
          <h1>{movieList.title}</h1>
          <p><strong>Actor:</strong> {movieList.actor}</p>
          <p><strong>Genre:</strong> {movieList.genre}</p>
          <p><strong>Director:</strong> {movieList.director}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDisplay;