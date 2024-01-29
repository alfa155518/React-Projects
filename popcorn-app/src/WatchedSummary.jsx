function WatchedSummary({ watched, average }) {
  const avgImdbRating = average(watched.map((movie) => +movie.imdbRating));
  const avgUserRating = average(
    watched.map((movie) => Number(movie.userRating))
  );
  const avgRuntime = average(
    watched.map((movie) => Number(movie.Runtime.split(" ").at(0)))
  );
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
