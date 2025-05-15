
import react, { useEffect, useState } from "react";
import "./Rows.css";
import axios from "../../Utils/axios";
// import movieTrailer from 'movie=trailer';
// import YouTube from 'react';
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  // setMovie??
  const [trailerUrl, setTrailerUrl]=useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const requests = await axios.get(fetchUrl);
        console.log(requests);
        setMovie(requests.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  const FetchVideo = async () => {
    try {
      console.log(fetchUrl);
      const request = await instance.get(fetchUrl);
      console.log(request);
      setMovie(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  useEffect(() => {
    FetchVideo();

  }, [fetchUrl]);

  
 
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
          {movies?.map((movie, index) => (
            <img
              onClick= {()=> handleClick(movie)}
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path :movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          ))}
        </div>
        <div style={{ padding: '40px' }}>
          { trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}

        </div>
      </div>
    </>
  );
      
};

export default Row

