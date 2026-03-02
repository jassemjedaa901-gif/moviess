import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 12,
        width: 260,
        cursor: "pointer",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 10 }}
      />
      <h3 style={{ margin: "10px 0 6px" }}>{movie.title}</h3>
      <p style={{ margin: 0 }}>
        <b>Rating:</b> {movie.rating}
      </p>
    </div>
  );
}