import React, { useMemo, useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

export default function App() {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Interstellar",
      description: "A team travels through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Breaking Bad",
      description: "A chemistry teacher becomes a meth producer.",
      posterURL: "https://m.media-amazon.com/images/I/81aQ7h7zQSL._AC_SL1500_.jpg",
      rating: 4.9,
    },
    {
      id: "3",
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing.",
      posterURL: "https://m.media-amazon.com/images/I/91QK7s8Q5oL._AC_SL1500_.jpg",
      rating: 4.7,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(""); // نخليه string باش input يكون ساهل

  const filteredMovies = useMemo(() => {
    const t = titleFilter.trim().toLowerCase();
    const minRate = rateFilter === "" ? 0 : Number(rateFilter);

    return movies.filter((m) => {
      const matchTitle = m.title.toLowerCase().includes(t);
      const matchRate = m.rating >= (Number.isNaN(minRate) ? 0 : minRate);
      return matchTitle && matchRate;
    });
  }, [movies, titleFilter, rateFilter]);

  const addMovie = (newMovie) => {
    setMovies((prev) => [newMovie, ...prev]);
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h1 style={{ marginTop: 0 }}>🎬 Movie App (Hooks)</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />

      <AddMovie onAdd={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}