
import React from 'react'
import Row from '../Rows/Row.jsx'
import  requests from "../../Utils/requests.jsx";
const Rowlist = () => {
  return (
    <>
      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> 
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default Rowlist
