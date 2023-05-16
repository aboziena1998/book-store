export const initalState = {
  total: 0,
  books: [],
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      console.log(state);
      return { total: 0, books: [...state.books, payload.item] };
      break;
    //   let newTotal = state.books.reduce((currNumber, book) => {
    //     currNumber + book.price;
    //   }, 0);
    //   return { total: newTotal, books: [...state.books, payload.item] };
    case "REMOVE_FROM_CART":
      // eslint-disable-next-line no-case-declarations
      //   let updatedBooksArray = state.books.filter(
      //     book => book.title !== payload.item.title
      //   );
      //   let newTotal = 0;
      //   updatedBooksArray.forEach(book => {
      //     newTotal += book.price;
      //   });
      //   return { total: newTotal, books: updatedBooksArray };
      console.log(state);
      return { ...state, books: [...state.books, payload.item] };

      break;

    default:
      return;
  }
};
