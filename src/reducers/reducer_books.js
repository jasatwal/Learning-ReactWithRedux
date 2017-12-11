// Responsible for books state property.
export default function(state, action) {
    console.log("BooksReducer", state, action);

    // This will always re-create the books property.
    return [
        { title: "Javascript: The Good Parts", pages: 101 },
        { title: "Harry Potter", pages: 39 },
        { title: "The Dark Tower", pages: 85 },
        { title: "Eloquent Ruby", pages: 1 }
    ];
}