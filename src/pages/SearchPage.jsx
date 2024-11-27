import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MovieSearch from "../components/MovieSearch";
import ContentGrid from "../components/ContentGrid";
import tmdb from "../utils/tmdb";
import "../styles/SearchPage.css";

const SearchPage = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({
    genre: "",
    rating: "",
    sort: "",
  });

  const genreOptions = [
    { id: "28", name: "액션" },
    { id: "12", name: "모험" },
    { id: "16", name: "애니메이션" },
    { id: "35", name: "코미디" },
  ];

  const sortOptions = [
    { id: "popularity.desc", name: "인기순" },
    { id: "release_date.desc", name: "최신순" },
    { id: "vote_average.desc", name: "평점순" },
  ];

  
  // 영화 데이터 가져오기
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${tmdb.baseUrl}/discover/movie?api_key=${apiKey}&language=ko-KR`
        );
        if (!response.ok) {
          throw new Error("API 요청 실패");
        }
        const data = await response.json();
        setMovies(data.results || []); // 전체 영화 데이터 설정
        setFilteredMovies(data.results || []); // 필터 적용 전 기본 데이터
      } catch (error) {
        console.error("영화 데이터 가져오기 실패:", error.message);
        setMovies([]);
        setFilteredMovies([]);
      }
    };

    fetchMovies();
  }, [apiKey]);

  useEffect(() => {
    const applyFilters = () => {
      let updatedMovies = [...movies];
  
      // 장르 필터
      if (filters.genre) {
        updatedMovies = updatedMovies.filter((movie) =>
          movie.genre_ids.includes(parseInt(filters.genre))
        );
      }
  
      // 평점 필터
      if (filters.rating) {
        updatedMovies = updatedMovies.filter(
          (movie) => movie.vote_average >= parseFloat(filters.rating)
        );
      }
  
      // 정렬 필터
      if (filters.sort) {
        updatedMovies.sort((a, b) => {
          if (filters.sort === "popularity.desc") {
            return b.popularity - a.popularity;
          } else if (filters.sort === "release_date.desc") {
            return new Date(b.release_date) - new Date(a.release_date);
          } else if (filters.sort === "vote_average.desc") {
            return b.vote_average - a.vote_average;
          }
          return 0;
        });
      }
  
      setFilteredMovies(updatedMovies);
    };
  
    applyFilters();
  }, [filters, movies]); // filters와 movies 상태가 바뀔 때마다 필터 적용
  
  

  // 필터 값 변경 처리
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ genre: "", rating: "", sort: "" });
    setFilteredMovies(movies); // 전체 영화 데이터로 필터 초기화
  };
  

  return (
    <div className="search-page">
      <Header />
      <div className="content-wrapper">
        <MovieSearch
          dropdownEntries={[
            { key: "genre", options: genreOptions },
            { key: "rating", options: ["6", "7", "8", "9"] },
            { key: "sort", options: sortOptions },
          ]}
          selectedOptions={filters}
          onOptionSelect={handleFilterChange}
          onClearOptions={clearFilters}
        />
        {filteredMovies.length > 0 ? (
          <ContentGrid title="검색 결과" movies={filteredMovies} />
        ) : (
          <p className="no-results">결과가 없습니다. 필터를 다시 설정하세요.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
