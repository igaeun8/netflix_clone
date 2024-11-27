/* src/pages/Home.jsx */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import tmdb from "../utils/tmdb";
import "../styles/Home.css";

function Home({ apiKey }) {
  const [movieSections, setMovieSections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!apiKey) {
      navigate("/auth"); // 로그인 페이지로 리디렉션
      return;
    }

    const fetchData = async () => {
      try {
        const sections = [
          { title: "보고 또 봐도 좋은 인기 시리즈", fetchUrl: tmdb.fetchTopRated },
          { title: "오늘 TOP 10 시리즈", fetchUrl: tmdb.fetchTrending },
          { title: "설렘주의 로맨스", fetchUrl: tmdb.fetchRomance },
          { title: "감동이 있는 애니메이션", fetchUrl: tmdb.fetchAnimation },
          { title: "액션이 끌린다면 이 영화는 어때요?", fetchUrl: tmdb.fetchAction },
        ];

        const data = await Promise.all(
          sections.map(async (section) => {
            const response = await fetch(
              section.fetchUrl.replace("api_key=API_KEY", `api_key=${apiKey}`)
            );
            if (!response.ok) throw new Error("API 요청 실패");
            const result = await response.json();
            return { title: section.title, movies: result.results };
          })
        );

        setMovieSections(data);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error.message);
      }
    };

    fetchData();
  }, [apiKey, navigate]);

  return (
    <div className="home">
      <Header />
      <Banner />
      <div className="home__rows">
        {movieSections.map((section, index) => (
          <MovieRow key={index} title={section.title} movies={section.movies} />
        ))}
      </div>
    </div>
  );
}

export default Home;
