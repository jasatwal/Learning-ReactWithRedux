import { combineReducers } from "redux";
import BooksReducer from "./reducer_books"
import ActiveBookReducer from "./reducer_active_book"

// This is the application state. The BookReducer is
// responsible for the books property and ActiveBookReducer
// is responsible for the activeBook property.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
