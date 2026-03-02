import React, { useState } from "react";

export default function AddMovie({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const r = Number(rating);
    if (!title.trim() || !description.trim() || !posterURL.trim() || Number.isNaN(r)) return;
    if (r < 0 || r > 5) return;

    onAdd({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      title: title.trim(),
      description: description.trim(),
      posterURL: posterURL.trim(),
      rating: r,
    });

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form onSubmit={submit} style={{ marginTop: 16, display: "grid", gap: 10, maxWidth: 520 }}>
      <h3 style={{ margin: 0 }}>Add New Movie</h3>

      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ padding: 10 }} />
      <input
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        placeholder="Poster URL"
        style={{ padding: 10 }}
      />
      <input
        type="number"
        min="0"
        max="5"
        step="0.5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating (0..5)"
        style={{ padding: 10 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={3}
        style={{ padding: 10, resize: "vertical" }}
      />

      <button type="submit" style={{ padding: "10px 14px", width: "fit-content" }}>
        Add
      </button>

      <small style={{ color: "#666" }}>
        ملاحظة: rating لازم يكون بين 0 و 5.
      </small>
    </form>
  );
}
