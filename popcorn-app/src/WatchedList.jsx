export default function WatchedList({ watched, setWatched }) {
  // Function Delete Movie
  function handelDeleteMovie(targetMovie) {
    let restMovies = watched
      .map((movie) => movie)
      .filter((movie) => movie.imdbID !== targetMovie.imdbID);
    setWatched(restMovies);
  }
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.Runtime}</span>
            </p>
            <button
              className="btn-delete"
              onClick={() => handelDeleteMovie(movie)}>
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
