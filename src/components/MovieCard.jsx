import React from "react";

const MovieCard = ({ type, title, image, year }) => {
  return (
    <div className="movie">
      <div>
        <p>{year}</p>
      </div>
      <div>
        <img
          src={image !== "N/A" ? image : "https://via,placehoder.com/400"}
          alt="Poster"
        />
      </div>
      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
