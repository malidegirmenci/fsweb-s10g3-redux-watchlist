import { ADD_WATCHLIST, REMOVE_WATCHLIST } from "../actions/watchlistActions";

export const initialState = {
    watchlist: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_WATCHLIST:
            let movie;
            let foundedMovie;
            if (action.payload) {
                movie = action.payload
                //console.log("id", movie.id)
                foundedMovie = state.watchlist.find(item => (movie.id === item.id))
                //console.log("foundedMovie: ",foundedMovie);
            } else {
                console.log("yet not loaded payload!");
            }
            return{
                ...state,
                watchlist: foundedMovie !== undefined ?[...state.watchlist] : [...state.watchlist, action.payload],
            }
        case REMOVE_WATCHLIST:
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => (action.payload !== movie.id))
            }
        default:
            return state;
    }
}
export default reducer;