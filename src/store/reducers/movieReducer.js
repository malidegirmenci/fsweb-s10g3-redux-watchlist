import {movies} from '../../movies';
import { FIRST_QUEUE, NEXT_QUEUE, PREV_QUEUE, RECYCLE_MOVIE, REMOVE_MOVIE } from '../actions/movieActions';

export const initialState = {
    movies: movies,
    queue:0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case NEXT_QUEUE:
            return {...state,
                queue:state.queue < state.movies.length - 1 ? state.queue + 1 : state.queue
            }
        case PREV_QUEUE:
            
            return {
                ...state,
                queue:state.queue - 1,
            }
        case FIRST_QUEUE:
            return{
                ...state,
                queue:initialState.queue,
            }
        case RECYCLE_MOVIE:
            return{
                ...state,
                movies:[...state.movies, action.payload]
            }
        case REMOVE_MOVIE:
            const newMovies =  state.movies.filter((movie) => movie.id !== action.payload.id)
            return{
                ...state,
                movies: newMovies,
                queue: newMovies.length === state.queue ? state.queue - 1 : state.queue
                // queue => dizinin son elemanı çıkarıldığında next state m dizi sayısının bir eksiğine ayarlanmalı
            }
        default:
            return state
    }
}
export default reducer;