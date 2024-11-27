/* src/components/MovieRow.jsx */

import React from "react";
import Slider from "react-slick";
import "../styles/MovieRow.css"; // 스타일 정의 파일

const MovieRow = ({ title, movies }) => {
  // 슬라이더 설정
  const sliderSettings = {
    dots: false, // 페이지 점 비활성화
    infinite: true, // 콘텐츠 무한 반복
    speed: 500, // 전환 속도
    slidesToShow: 5, // 화면에 표시할 항목 수
    slidesToScroll: 1, // 한 번에 스크롤할 항목 수
    responsive: [
      {
        breakpoint: 1024, // 1024px 이하일 때
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // 768px 이하일 때
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // 480px 이하일 때
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="movie_row">
      <h2>{title}</h2>
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie_row_item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="movie_poster"
            />
            <p className="movie_title">{movie.title || movie.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieRow;
