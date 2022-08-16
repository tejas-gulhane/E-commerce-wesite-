import React, { useState , useEffect } from 'react';

import MoviesList from './components/MoviesList';
// import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setretry] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchMoviesHandler = async () => {
    setretry(false);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/film/');
      if (!response.ok) {
        setretry(true);
        throw new Error('Something went wrong!...RETRYING ....');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);

      setIsLoading(false)
    } catch (error) {
        setError(error.message);
        if(retry)
        {
          setTimeout(() => {
            fetchMoviesHandler()
            console.log("retry");
          }, 2000);
        }
        
      }
      setIsLoading(false);
}
// useEffect(() => {
//   fetchMoviesHandler();
// }, [!response.ok]);
 const cancelRetryingHandler =() =>{
  setretry(false);

 }



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      
      <section>
      {isLoading && <p>Loading...</p>}
      
       
      {!isLoading && <MoviesList movies={movies} />}

      {!isLoading && movies.length===0 && <p>{error}</p>}
      {error && retry && <div><button onClick={cancelRetryingHandler}>Cancel Retrying</button></div>}
      </section>
    </React.Fragment>
  );
}

export default App;
