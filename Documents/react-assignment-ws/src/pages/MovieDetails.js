import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const [data , setData] = useState({})
    const params = useParams()
    const {id} = params;

    useEffect(() => {
      movieDetails()
    
    }, [])
    
    
    const movieDetails = async () => {
        const response = await fetch(`http://localhost:4000/api/v1/movieDetails/${id}`)
        const data = await response.json()
        setData(data)
    }

  return (
    <div className='container-fluid'>
        
    </div>
  )
}

export default MovieDetails