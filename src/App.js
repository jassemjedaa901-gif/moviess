import React, { useEffect, useState } from "react";

function ProfileCard({ person }) {
  // BUG #2: wrong prop name used below (person.job doesn't exist; it should be person.profession)
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 10 }}>
      <h2>{person.fullName}</h2>
      <p><b>Profession:</b> {person.job}</p>
      <p><b>Age:</b> {person.age}</p>
    </div>
  );
}

function Counter({ start }) {
  // BUG #1: start is a string passed from parent, so count becomes stringy during + 1
  const [count, setCount] = useState(start);

  return (
    <div style={{ marginTop: 16 }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

function SearchBox({ onSearch }) {
  // BUG #3: input is uncontrolled + onChange sends wrong value (sends event instead of text)
  return (
    <div style={{ marginTop: 16 }}>
      <input
        placeholder="Search by name..."
        onChange={onSearch}
        style={{ padding: 8, width: 240 }}
      />
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [person, setPerson] = useState({
    fullName: "Tony Stark",
    profession: "Engineer",
    age: 40,
  });

  // BUG #4: effect runs every render and keeps overwriting state
  useEffect(() => {
    setPerson({ ...person, age: person.age + 0 });
  });

  const filteredName = person.fullName.toLowerCase().includes(query.toLowerCase());

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>React DevTools Debug Checkpoint</h1>

      <SearchBox onSearch={(e) => setQuery(e)} />

      {filteredName ? <ProfileCard person={person} /> : <p>No match.</p>}

      <Counter start={"0"} />

      <button
        style={{ marginTop: 16 }}
        onClick={() => setPerson({ ...person, age: person.age + 1 })}
      >
        Increase Age
      </button>
    </div>
  );
}