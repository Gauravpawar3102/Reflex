import React, { useState, useEffect } from 'react';
import './Row.css';
// 'https://api.themoviedb.org/3/trending/all/day?api_key=5bbf733d47e46fe5c0bf4ef65cf2016b',
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    const api = () =>
      fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=5bbf733d47e46fe5c0bf4ef65cf2016b'
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // console.log(`baseUrl data.results[0].poster_path`);
          setMovies(data.results);
          console.log(data.results);
        });
    api();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

// from line8
// const fetchMovies = async () => {
//   const request = await instance.get(fetchUrl).catch((err) => {
//     console.log('MovieRow Error', err.response);
//   });
//   console.log(request);
//   return request;
// };

// type 2
//  const fetchMovies  = ()=>{
//     fetch(baseURL.concat(fetchUrl))
//     .then(res => res.json())
//     .then(
//       (result) => {

//       },

//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       }
//     )

// fetchMovies();
// type 3
