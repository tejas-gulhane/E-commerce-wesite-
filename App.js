import React, { useState , useEffect  ,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setretry] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchMoviesHandler =useCallback( async () => {
    setretry(false);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-e4aeb-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        setretry(true);
        throw new Error('Something went wrong!...RETRYING ....');
      }

      const data = await response.json();

      const reloadedmovies=[]

      for (let key in data)
      {
        reloadedmovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }
     
      setMovies(reloadedmovies);
      setIsLoading(false)
    } 
    catch (error) {
        setError(error.message);
        if(retry)
        {
            setTimeout(() => {
            fetchMoviesHandler();
            console.log("retry");
          }, 2000);
        }
        
      }
      setIsLoading(false);
},[])


useEffect(() => {
  fetchMoviesHandler();
}, [fetchMoviesHandler]);


 const cancelRetryingHandler =() =>{
  setretry(false);

 }


  async function onAddMovie(movie) {
     const res = await fetch('https://react-http-e4aeb-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body:JSON.stringify(movie)  ,
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data= await res.json();
    console.log(data)
  }


  return (
    <React.Fragment>
      <section> {<AddMovie onAddMovie={onAddMovie}/>}</section>
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
