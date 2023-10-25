export const myLogger = (store) => (next) => (action) => {
    console.warn("dispatched action: ", action);
    console.log("[oldStore]:", store.getState());
    next(action);
    console.log("action dispatched");
    console.log("[newStore]:", store.getState());
}