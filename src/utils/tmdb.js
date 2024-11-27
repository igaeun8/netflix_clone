/* src/utils/tmdb.js */

const API_KEY = "5025ba76bb20a31a336099644de63b19";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = {
  // 한국어 영화 정보 요청
  fetchKoreanContent: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_original_language=ko`, 

  // 인기 콘텐츠 요청 (한국어로)
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ko`, 

  // 사용자 찜 목록 예시 (한국어로)
  fetchMyList: `${BASE_URL}/list/1?api_key=${API_KEY}&language=ko`, // 예시: 찜한 콘텐츠

  // 미국 드라마 목록 요청 (한국어로)
  fetchAmericanTV: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_origin_country=US`,

  // 애니메이션 장르 (장르 ID: 16)
  fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=16`,

  // 음악 장르 (장르 ID: 10402)
  fetchMusic: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=10402`,

  // 코미디 장르 (장르 ID: 35)
  fetchComedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=35`,

  // 공포 장르 (장르 ID: 27)
  fetchHorror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=27`,

  // 다큐멘터리 장르 (장르 ID: 99)
  fetchDocumentary: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=99`,

  // 로맨스 장르 (장르 ID: 10749)
  fetchRomance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=10749`,

  // 액션 장르 (장르 ID: 28)
  fetchAction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=28`,

  // 드라마 장르 (장르 ID: 18)
  fetchDrama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=18`,

  // SF 장르 (장르 ID: 878)
  fetchScienceFiction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=878`,

  // 패밀리 장르 (장르 ID: 10751)
  fetchFamily: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=10751`,

  // 현재 상영 중인 영화 (지역: 한국)
  fetchNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko&region=KR`,

  // 개봉 예정 영화
  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko&region=KR`,

  // 최고 평점 영화
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko`,

  // TV 프로그램의 인기 콘텐츠
  fetchPopularTV: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko`,

  // TV 프로그램의 최고 평점 콘텐츠
  fetchTopRatedTV: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ko`,

  // 넷플릭스 오리지널 콘텐츠
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_networks=213`,
};

export default tmdb;
