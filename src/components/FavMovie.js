import { useDispatch } from "react-redux";
import { removeWatchlist } from "../store/actions/watchlistActions";
import { recycleMovie } from "../store/actions/movieActions";

export default function FavMovie({ movie }) {
  const dispatch = useDispatch();
  const removeWatchlistHandler = (movie) => {
    dispatch(recycleMovie(movie))
    dispatch(removeWatchlist(movie.id))
  }
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{movie.title}</div>
      <button onClick={() => removeWatchlistHandler(movie) } className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}