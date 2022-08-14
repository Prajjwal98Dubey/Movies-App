import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <>
    <div className='movie-card'>
    {movie.Poster==="N/A" ? (<img src="https://picsum.photos/200/300" alt="1loading"/>):(<img src={movie.Poster} alt="2loading"/>)}
    <h3>Title: {movie.Title}</h3>
    <h4>Year: {movie.Year}</h4>
    </div>
    </>
  )
}

export default MovieCard
