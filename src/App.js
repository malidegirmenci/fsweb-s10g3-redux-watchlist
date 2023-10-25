//import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist } from "./store/actions/watchlistActions";
import { nextQueue, prevQueue, firstQueue, removeMovie } from "./store/actions/movieActions";

function App() {
  //const [sira, setSira] = useState(0);
  const dispatch = useDispatch();
  const queue = useSelector(store => store.movieReducer.queue);
  const favMovies = useSelector(store => store.watchlistReducer.watchlist);
  const movies = useSelector(store => store.movieReducer.movies);
  console.log("movies:", movies);
  console.log("queue", queue);
  console.log("watchList", favMovies);

  //console.log("FavMovies:", favMovies)
  function sonrakiFilm() {
    //setSira(sira + 1);
    dispatch(nextQueue())
  }
  function öncekiFilm() {
    dispatch(prevQueue());
  }
  function basaDon() {
    dispatch(firstQueue())
  }
  function addWatchlistHandler(movie){
    dispatch(addWatchlist(movie))
    dispatch(removeMovie(movie))
  }

  return (
    <div className="wrapper max-w-2xl mx-auto border border-style: solid">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />
          <div className="flex gap-3 justify-end py-3">
            {
              queue === 0 ? null :
                <button
                  onClick={() => öncekiFilm()}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Önceki
                </button>
            }
            {
              queue === movies.length - 1 ? null :
                <button
                  onClick={() => sonrakiFilm()}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Sıradaki
                </button>
            }
            {
              queue !== movies.length - 1 ? null :
                <button
                  onClick={() => basaDon()}
                  className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                >
                  Başa Dön
                </button>
            }
            <button onClick={() => { addWatchlistHandler(movies[queue])}} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white" >
              Listeme ekle
            </button>
          </div>
        </Route>
        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id}  movie={movie}/>
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
