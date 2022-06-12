import React, {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=34a35d6e'

const App = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

        const Films = async (title) => {
          const response = await fetch(`${API_URL}&s=${title}`);
          const data = await response.json();
          setMovies(data.Search)
        }
      
        useEffect(() => {
          Films()
        }, [])

    return (
        <div className='app__container'>
            <div className="navbar">
                <h1 className="title">Chqoubi <span>Movies</span></h1>
                <input type="text" placeholder='Enter a movie name' value={search} onChange={(e) => {setSearch(e.target.value)}} className='search' />
                <button className='btn-search' onClick={() => Films(search)}>search</button>
            </div>
            <div className='m'>
                {
                    movies?.length > 0 ? (
                        movies.map((m) => (
                            <div className="movies">
                                <MovieCard className='mov' movie={m}/>
                            </div>
                        ))
                    ) : (
                            <div className='error'>
                                <h1>Sorry No movies founded</h1>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default App
