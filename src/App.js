import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter/Filter";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Pulp Fiction ",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR2,0,140,209_AL_.jpg",
      rating: "8",
    },
    {
      id: uuidv4(),
      title: "Le festin nu",
      description:
        "After developing an addiction to the substance he uses to kill bugs, an exterminator accidentally kills his wife, and becomes involved in a secret government plot being orchestrated by giant bugs in a port town in North Africa.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTRiOTQ2ZWQtMmIwYy00Y2Y3LWFmMzgtNzgzZWU1MDhlOGJhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg",
      rating: "6",
    },

    {
      id: uuidv4(),
      title: "There Will Be Blood",
      description:
        "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      rating: "8",
    },
    {
      id: uuidv4(),
      title: "Requiem for a Dream",
      description:
        "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
      rating: "8",
    },
  ]);
  const [titleSearch, setTitleSearch] = useState("");

  const [filtredMovies, setFiltredMovies] = useState(movies);
  const [ratingSearch, setRatingSearch] = useState(1);

  useEffect(() => {
    setFiltredMovies(
      movies.filter(
        (movie) =>
          movie.title
            .toLocaleLowerCase()
            .includes(titleSearch.toLocaleLowerCase()) &&
          movie.rating >= ratingSearch
      )
    );
  }, [titleSearch, ratingSearch, movies]);

  return (
    <div className="App">
      <Filter
        setMovies={setMovies}
        movies={movies}
        setTitleSearc={setTitleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <MovieList movies={filtredMovies} />
    </div>
  );
}

export default App;
