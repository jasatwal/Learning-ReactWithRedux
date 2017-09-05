export default function(state = null, action) {
    console.log("ActiveBookReducer", state, action);
    if (action.type === "BOOK_SELECTED") {
        return action.payload;
    }

    return state;
}