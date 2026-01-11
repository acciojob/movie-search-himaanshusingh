import React from "react";

const Movies = ({ movies }) => {
  return (
    <div>
      {typeof movies == "object" ? (
        <ul className="movie-container">
          {movies.map(({ Title, Year, Poster }, index) => (
            <li key={index}>
              <h2>{`${Title} (${Year})`}</h2>
              <img src={Poster} alt={Title} />
            </li>
          ))}
        </ul>
      ) : <p className="error"> {movies}</p>}
    </div>
  ); // prettier-ignore
};

export default Movies;
