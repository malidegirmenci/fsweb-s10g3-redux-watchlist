export const ADD_WATCHLIST = "ADD_WATCHLIST => adds to watchlist";
export const REMOVE_WATCHLIST = "REMOVE_WATCHLIST => removes from watchlist";

export const addWatchlist = (movie) => {
    return({type:ADD_WATCHLIST, payload:movie});
};

export const removeWatchlist = (id) => {
    return ({type:REMOVE_WATCHLIST, payload:id})
}
