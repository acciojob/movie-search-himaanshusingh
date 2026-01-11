import React, { useState } from "react";
import "./../styles/App.css";
import Search from "./Search";
import Movies from "./Movies";
import "regenerator-runtime/runtime";

const App = () => {
  const [movies, setMovies] = useState("");

  return (
    <div>
      <Search setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
};

export default App;
