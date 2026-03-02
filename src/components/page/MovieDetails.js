import React from "react";
import { Link, useParams } from "react-router-dom";

export default function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <div style={{ padding: 24, fontFamily: "Arial" }}>
        <p>Movie not found.</p>
        <Link to="/">⬅ Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <Link to="/">⬅ Back to Home</Link>

      <h1 style={{ marginTop: 12 }}>{movie.title}</h1>
      <p>{movie.description}</p>

      <div style={{ marginTop: 16 }}>
        <iframe
          width="800"
          height="450"
          src={movie.trailerLink}
          title={`${movie.title} trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}