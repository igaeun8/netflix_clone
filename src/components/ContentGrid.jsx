/* src/components/ContentGrid.jsx */ 

import React from "react";
import "../styles/ContentGrid.css";

function ContentGrid({ title, movies }) {
  return (
    <div className="contentGrid">
      <h2 className="contentGrid__title">{title}</h2>
      <div className="contentGrid__container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="contentGrid__item">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title || movie.name}
                className="contentGrid__image"
              />
              <p className="contentGrid__name">{movie.title || movie.name}</p>
            </div>
          ))
        ) : (
          <p className="no-results">결과가 없습니다. 필터를 다시 설정하세요.</p>
        )}
      </div>
    </div>
  );
}


export default ContentGrid;
