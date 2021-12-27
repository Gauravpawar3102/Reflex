import React, { useState, useEffect } from 'react';
import instance from './axios';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5bbf733d47e46fe5c0bf4ef65cf2016b',
      {
        method: 'GET',
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
