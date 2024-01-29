import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Box from "./Box";
import MoviesList from "./MoviesList";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";
import MovieDetails from "./MovieDetails";

// Calc Average
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// my Key
const key = "d2ba65c4";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");
  const [query, setQuery] = useState("");
  let tempQuery = "interstellar";
  const [selectedId, setSelectedId] = useState("");

  // function Get Data
  async function getData() {
    const controller = new AbortController();

    try {
      setLoading(true);
      setError("");

      // Fetch API
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=${!query ? tempQuery : query}`,
        { signal: controller.signal }
      );

      // If There Error
      if (!res.ok) throw new Error("Something went wrong with fetching movies");

      const data = await res.json();

      // If There No Response
      if (data.Response === "False") throw new Error("Movie not found");

      // Set Data In State
      setMovies(data.Search);
      setError("");

      // If there Error Show It
    } catch (err) {
      if (err.name !== "AbortError") {
        console.log(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    } finally {
      setLoading(false);
    }

    return function () {
      controller.abort();
    };
  }

  // Start Get Data
  useEffect(() => {
    getData();
  }, [query]);

  // Function Get Movie Details
  function movieDetails(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  // Function Close Details Of Movie
  function handelCloseDetails() {
    setSelectedId(null);
  }

  return (
    <>
      {/* Nav Bar Component */}
      <NavBar movies={movies} query={query} setQuery={setQuery} err={err} />

      {/* Main Component */}
      <Main>
        <Box movies={movies}>
          {!loading && !err && (
            <MoviesList movies={movies} movieDetails={movieDetails} />
          )}
          {loading && <p className="loader">Loading...</p>}
          {err && <ErrorMessage message={err} />}
        </Box>

        {/* Details And Watched List and Summary Component */}
        <Box average={average}>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handelCloseDetails={handelCloseDetails}
              setWatched={setWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} average={average} />
              <WatchedList watched={watched} setWatched={setWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// Function Error Message
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
}
