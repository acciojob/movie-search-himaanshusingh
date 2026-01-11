import React, { useState } from "react";

const Search = ({ setMovies }) => {
  const [text, setText] = useState("");
  const API_KEY = "99eb9fd1";

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    (async function () {
      const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`);
      const res = await data.json();
      setMovies(res?.Search || "Invalid movie name. Please try again.");
    })(); // prettier-ignore
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search Movie</label>
      <br></br>
      <input id="search" onChange={handleChange} value={text} />
      <button>Search</button>
    </form>
  );
};

export default Search;
