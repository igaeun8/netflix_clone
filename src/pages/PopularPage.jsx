/* src/pages/PopularPage.jsx */

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ContentGrid from "../components/ContentGrid";
import tmdb from "../utils/tmdb";
import "../styles/PopularPage.css";

function PopularPage({ apiKey }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 로컬 스토리지에서 찜 목록 불러오기
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // 로컬 스토리지에 찜 목록 저장
  const updateWishlistInLocalStorage = (updatedWishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // 찜 추가/제거 기능
  const toggleWishlist = (movie) => {
    const isInWishlist = wishlist.some((item) => item.id === movie.id);
    const updatedWishlist = isInWishlist
      ? wishlist.filter((item) => item.id !== movie.id) // 이미 존재하면 제거
      : [...wishlist, movie]; // 없으면 추가

    setWishlist(updatedWishlist);
    updateWishlistInLocalStorage(updatedWishlist);
  };

  // 찜 여부 확인
  const isInWishlist = (id) => wishlist.some((movie) => movie.id === id);

  // 인기 영화 데이터 가져오기
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          tmdb.fetchTrending.replace("api_key=API_KEY", `api_key=${apiKey}`)
        );
        if (!response.ok) throw new Error("API 요청 실패");
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error("인기 콘텐츠 가져오기 실패:", error.message);
      }
    };

    fetchPopularMovies();
  }, [apiKey]);

  return (
    <div className="PopularPage">
      <Header />
      <ContentGrid
        title="인기 콘텐츠"
        movies={popularMovies}
        toggleWishlist={toggleWishlist} // 찜 추가/제거 함수 전달
        isInWishlist={isInWishlist} // 찜 상태 전달
      />
    </div>
  );
}

export default PopularPage;
