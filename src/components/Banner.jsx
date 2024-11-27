/* src/components/Banner.jsx */
import React, { useState, useEffect } from "react";
import "../styles/Banner.css"; // 배너 스타일 정의

function Banner() {
  // 영화 목록 데이터를 저장할 상태
  const [movieList, setMovieList] = useState([]);

  // 배너에서 강조할 영화를 저장할 상태
  const [highlightedMovie, setHighlightedMovie] = useState(null);

  useEffect(() => {
    // TMDB API를 통해 주간 인기 영화 데이터를 가져오는 함수
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=4cd920ba51152658f0482c1d3fd9b0f5&language=ko"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setMovieList(data.results); // 영화 목록 상태 업데이트
          // 랜덤으로 한 영화를 선택하여 강조할 영화로 설정
          setHighlightedMovie(
            data.results[Math.floor(Math.random() * data.results.length)]
          );
        }
      })
      .catch((error) => {
        console.error("영화 데이터를 불러오는 중 오류 발생:", error);
      });
  }, []);

  // 배너의 배경 이미지로 사용할 URL 생성
  const backgroundImageUrl = highlightedMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${highlightedMovie?.backdrop_path}`
    : "";

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="banner__contents">
        {/* 배너 제목 표시 */}
        <h1 className="banner__title">{highlightedMovie?.title || "영화 제목"}</h1>

        {/* 배너 내 버튼들 */}
        <div className="banner__buttons">
          <button className="banner__button">재생</button>
          <button className="banner__button">상세 정보</button>
        </div>

        {/* 영화 설명 표시 */}
        <h1 className="banner__explain">
          {highlightedMovie?.overview ||
            "영화에 대한 간략한 줄거리입니다. 더 많은 정보를 보려면 상세 정보 버튼을 클릭하세요."}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
