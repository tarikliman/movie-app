import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList/MovieList";
import "./App.css";
import { SearchInput } from "./components/SearchInput/SearchInput";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState("Harry");

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ffaeee98`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);

  

  return (

    <div className="app">

      <div className= "flex justify-between text-slate-50 mb-12">
      <SearchInput value= {searchValue} setValue = {setSearchValue}/>
      </div>
      
      <div className = "category-row">
       <p class="text-slate-100 pl-8 pb-4 font-medium ">Searched</p>
      <MovieList movies={movies} />
      </div>
      
    </div>
  );
}

export default App;
