// 63b0eaf9c4679d3fc69b9df5ce616120
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  const API_KEY = "63b0eaf9c4679d3fc69b9df5ce616120";


  const VERI_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;


  const getApi=async()=>{
    try {
     const {data} = await axios(VERI_URL)     
     console.log('data', data.results) 
     setMovies(data.results);

    } catch (error) {
      console.log('error', error)

    }
  }

   const searchApi = async () => {
     try {
       const { data } = await axios(SEARCH_API);
       console.log("data", data.results);
       setMovies(data.results);
     } catch (error) {
       console.log("error", error);
     }
   };

  const handleSubmit =(e)=>{
    e.preventDefault()
    searchApi()
  }

  useEffect(() => {
    getApi()
  }, [])
  
  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search search-input"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-dark" type="submit">
          SEARCH
        </button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Main;