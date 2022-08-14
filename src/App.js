import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[movies,setMovies]=useState([]);
  const[term,setTerm]=useState('')
  const[isloading,setisLoading]=useState(true)

  const displayMovie=(title)=>{
    axios.get(`https://omdbapi.com/?s=${title}&apikey=f5f53ff4`)
    .then(res=>{
      setMovies(res.data.Search)
       setisLoading(false)})
  }
  useEffect(()=>{
    displayMovie("batman")
  },[])

  return (
    <>
     <div className='search-box'>
      <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>
      <button className='search-btn' onClick={()=>displayMovie(term)}>Search</button>
     </div>
     {/* { isloading === false && movies.length===0 && (<h1 className='no-movie'>No Movie Found for this search</h1>)} */}
     {isloading ? (<h1 className='load-tag'>Loading...</h1>):
     <div className='container'>
      <div className='grid'>
      {movies.map(movie=>(
       <MovieCard key={movie.imdbID} movie={movie}/>
      ))}
      </div>
     </div>}
  
     </>
  );
}

export default App;
