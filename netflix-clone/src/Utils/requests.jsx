const API_KEY = import.meta.env.VITE_TMDB_API_KEY;  // used to import api-key from .env file to current request.jsx file  my api= VITE_TMDB_API_KEY
const requests = {
  fetchTrending: `/trending/all/week?API_KEY=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?API_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?API_KEY=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?API_KEY_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?API_KEY_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?API_KEY_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?API_KEY_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?API_KEY_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?API_KEY_key=${API_KEY}&language=en-us&page=1`,
};
export default requests;