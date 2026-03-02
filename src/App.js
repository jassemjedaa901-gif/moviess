import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Interstellar",
      description: "A team travels through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      rating: 4.8,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: "2",
      title: "Inception",
      description: "A thief who steals secrets through dream-sharing.",
      posterURL: "https://m.media-amazon.com/images/I/91QK7s8Q5oL._AC_SL1500_.jpg",
      rating: 4.7,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const filteredMovies = useMemo(() => {
    const t = titleFilter.trim().toLowerCase();
    const minRate = rateFilter === "" ? 0 : Number(rateFilter);

    return movies.filter((m) => {
      const matchTitle = m.title.toLowerCase().includes(t);
      const matchRate = m.rating >= (Number.isNaN(minRate) ? 0 : minRate);
      return matchTitle && matchRate;
    });
  }, [movies, titleFilter, rateFilter]);

  const addMovie = (newMovie) => setMovies((prev) => [newMovie, ...prev]);

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <div style={{ padding: 24, fontFamily: "Arial" }}>
            <h1 style={{ marginTop: 0 }}>🎬 Movie App (Router)</h1>

            <Filter
              titleFilter={titleFilter}
              setTitleFilter={setTitleFilter}
              rateFilter={rateFilter}
              setRateFilter={setRateFilter}
            />

            <AddMovie onAdd={addMovie} />

            <MovieList movies={filteredMovies} />
          </div>
        }
      />

      {/* Details */}
      <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
    </Routes>
  );
}