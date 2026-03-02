import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 16 }}>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map((m) => <MovieCard key={m.id} movie={m} />)
      )}
    </div>
  );
}