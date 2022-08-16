import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
// import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // let content = <p>Found no movies.</p>
  const fetchMoviesHandler = async () => {
      setIsLoading(true);

      const response = await fetch('https://swapi.dev/api/films/');

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
    
  };

  // if (isLoading) {
  //      content = <p>Loading...</p>;
  //    }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      {/* <section>{content}</section> */}

      {isLoading && <p>Loading...</p>}
      
       
      {!isLoading && <section><MoviesList movies={movies} /></section>}
      {!isLoading && movies.length===0 && <p>No Movies Found</p>}

    </React.Fragment>
  );
}

export default App;
