// src/utils/URL.js
import axios from "axios";

const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "ko-KR";

// URL 생성
export const createUrl = (endpoint, apiKey, page = 1) => {
  return `${API_BASE}${endpoint}?api_key=${apiKey}&language=${LANGUAGE}&page=${page}`;
};

// 인기 영화 가져오기
export const fetchMovies = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("API 요청 실패:", error.message);
    return [];
  }
};
