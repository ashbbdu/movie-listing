import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
const [movieData , setMovieData] = useState([]);

useEffect(() => {
    getMovies()
} ,[])

const getMovies = async () => {
    const response = await fetch("http://localhost:4000/api/v1/movie-list");
    const data = await response.json()
    setMovieData(data.data)
}

  return (
    <div className='container-fluid'>
        <h1 className='mt-2'>List of vintage movies</h1>
        <MovieCard movieData={movieData} />
    </div>
  )
}

export default Home