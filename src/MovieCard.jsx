import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} alt="poster" className='mimg'/>
        <h2 className='mTitle'>{movie.Title}</h2>
        <p className='mYear'>{movie.Year}</p>
    </div>
  )
}

export default MovieCard