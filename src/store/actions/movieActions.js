export const  NEXT_QUEUE = "NEXT_QUEUE => Next movie";
export const PREV_QUEUE = "PREV_QUEUE => Previous movie";
export const FIRST_QUEUE = "FIRST_QUEUE => First movie";
export const nextQueue = () => {
    return({type:NEXT_QUEUE});
};
export const prevQueue = () => {
    return({type:PREV_QUEUE});
};
export const firstQueue = () => {
    return({type:FIRST_QUEUE});
}