import {movies} from '../../movies';
import { FIRST_QUEUE, NEXT_QUEUE, PREV_QUEUE } from '../actions/movieActions';

export const initialState = {
    movies: movies,
    queue:0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case NEXT_QUEUE:
            return {...state,
                queue:state.queue < 19 ? state.queue + 1 :state.queue
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
        default:
            return state
    }
}
export default reducer;