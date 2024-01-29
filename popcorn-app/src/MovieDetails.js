import { useEffect, useState } from "react";
import StarRating from "./StartRating";
export default function MovieDetails({
  selectedId,
  handelCloseDetails,
  setWatched,
  watched,
}) {
  const [selectedMovie, setSelectedMovie] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [userRating, setUserRating] = useState();

  let isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  // Items Of Movie Details
  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = selectedMovie;

  // Get Details
  useEffect(() => {
    setIsLoading(true);
    async function handelDetails() {
      // Fetch On Details
      let res = await fetch(
        `http://www.omdbapi.com/?apikey=d2ba65c4&i=${selectedId}`
      );

      let data = await res.json();
      // Set Details In State
      setSelectedMovie(data);
      setIsLoading(false);
    }
    handelDetails();
  }, [selectedId]);

  // Function Add Movie To List Of Watched
  function handelAddWatched(movie) {
    setWatched([...watched, { ...movie, userRating: userRating }]);
  }

  useEffect(() => {
    if (!selectedMovie.Title) return;
    document.title = `Movie: ${selectedMovie.Title}`;
    return function () {
      document.title = "usePopCorn";
    };
  }, [selectedMovie]);

  return isLoading ? (
    <p className="loader">Loading....</p>
  ) : (
    <div className="details">
      <header>
        <button className="btn-back" onClick={handelCloseDetails}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${selectedMovie} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>🌟</span>
            {imdbRating} IMDb Rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          {!isWatched ? (
            <>
              <StarRating
                size={24}
                maxRating={10}
                setUserRating={setUserRating}
              />
              {userRating > 0 && (
                <button
                  className="btn-add"
                  onClick={() => handelAddWatched(selectedMovie)}>
                  Add to List
                </button>
              )}
            </>
          ) : (
            <p>You Are Rated This Movies {userRating}</p>
          )}
        </div>
        <em>{plot}</em>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}
