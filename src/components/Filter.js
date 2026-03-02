import React from "react";

export default function Filter({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ padding: 10, width: 240 }}
      />

      <input
        type="number"
        min="0"
        max="5"
        placeholder="Min rating..."
        value={rateFilter}
        onChange={(e) => setRateFilter(e.target.value)}
        style={{ padding: 10, width: 140 }}
      />
    </div>
  );
}