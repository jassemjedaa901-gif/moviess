import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 10, padding: 12, width: 260 }}>
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 10 }}
      />
      <h3 style={{ margin: "10px 0 6px" }}>{movie.title}</h3>
      <p style={{ margin: "0 0 8px", color: "#444" }}>{movie.description}</p>
      <p style={{ margin: 0 }}>
        <b>Rating:</b> {movie.rating}
      </p>
    </div>
  );
}