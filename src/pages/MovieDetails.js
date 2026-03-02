import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div style={{ padding: 24 }}>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {movie.trailerLink && (
        <iframe
          title="trailer"
          width="560"
          height="315"
          src={movie.trailerLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default MovieDetails;
