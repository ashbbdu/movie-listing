import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const [data , setData] = useState({})
    console.log(data , "Data")
    const params = useParams()
    const {id} = params;

    useEffect(() => {
      movieDetails()
    
    }, [])
    
    
    const movieDetails = async () => {
        const response = await fetch(`http://localhost:4000/api/v1/movieDetails/${id}`)
        const data = await response.json()
        setData(data.movie)
    }

  return (
    <div className='container-fluid'>
       
        <h1>Movie Details</h1>
        <div className='row'>
      <div className='col-sm-6'>   <img src={data[0]?.Poster} alt="poster" className='img-fluid details-img' /></div>
          
            <div className='col-sm-6'>
                <h2>Name : {data[0]?.Title}</h2>
                <p>Description : {data[0]?.Plot}</p>
                <p>Released On : {data[0]?.Released} </p>
                <p>Cast : {data[0]?.Actors} </p>
                
                <p>Directed By : {data[0]?.Director}</p>
                <p>Genre: {data[0]?.Genre} </p>
                <p>Total Box Office Collection : {data[0]?.BoxOffice}</p>
                <p>Awards : {data[0]?.Awards}</p>
                <p>IMDB Rating : {data[0]?.imdbRating} / 10</p>
            </div>
        
        </div>
    </div>
  )
}

export default MovieDetails