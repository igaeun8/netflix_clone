// src/pages/WishlistPage.jsx

import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Header 컴포넌트 임포트
import "../styles/WishlistPage.css";
import { WishlistManager } from "../hooks/useWishlist"; // WishlistManager 임포트

const WishlistPage = () => {
  // WishlistManager 인스턴스를 사용하여 위시리스트 초기화
  const wishlistManager = new WishlistManager();
  const [wishlist, setWishlist] = useState(wishlistManager.getWishlist());

  // 찜 리스트에서 항목 제거
  const removeFromWishlist = (id) => {
    const movie = wishlist.find((movie) => movie.id === id);
    if (movie) {
      wishlistManager.toggleWishlist(movie); // 위시리스트에서 해당 영화 제거
      setWishlist(wishlistManager.getWishlist()); // 상태 업데이트
    }
  };

  // 로컬 스토리지 상태 동기화
  useEffect(() => {
    setWishlist(wishlistManager.getWishlist());
  }, []);

  return (
    <>
      <Header /> {/* 고정된 헤더 */}
      <div className="wishlist-page"> {/* 헤더 높이만큼 여백 추가 */}
        <div className="wishlist-container">
          <h1 className="wishlist-title">내가 찜한 콘텐츠</h1>
          {wishlist.length > 0 ? (
            <div className="movie-grid">
              {wishlist.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <button
                      className="remove-button"
                      onClick={() => removeFromWishlist(movie.id)}
                    >
                      제거
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="wishlist-empty">찜한 콘텐츠가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
