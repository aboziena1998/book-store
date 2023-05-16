import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
const initialState = {
  total: 0,
  books: [],
};
export const cartContext = createContext(initialState);
const ACTIONS = {
  ADD_BOOK_TO_CART: "ADD_BOOK_TO_CART",
  REMOVE_BOOK_FROM_CART: "REMOVE_BOOK_FROM_CART",
  UPDATE_TOTAL: "UPDATE_TOTAL",
  UPDATE: "UPDATE",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_BOOK_TO_CART:
      const inBooks = state.books.find(book => book.id === payload.item.id);
      console.log(inBooks);
      if (inBooks) {
        const updatedBooks = state.books.map(book => {
          return inBooks.id === book.id
            ? { ...book, amount: book.amount + payload.amount }
            : book;
        });
        return {
          ...state,
          books: updatedBooks,
        };
      } else {
        const newItem = { ...payload.item };
        newItem.amount = payload.amount;
        return {
          ...state,
          books: [...state.books, newItem],
        };
      }

    case ACTIONS.REMOVE_BOOK_FROM_CART:
      const updatedBooksAfterRemove = state.books.filter(
        book => book.id !== payload.id
      );
      return {
        ...state,
        books: updatedBooksAfterRemove,
      };

    case ACTIONS.UPDATE_TOTAL:
      const newTotal = calculateTotal(state.books);
      return {
        ...state,
        total: newTotal,
      };

    case ACTIONS.UPDATE:
      // eslint-disable-next-line no-case-declarations
      const newBooksArray = state.books.map(book => {
        if (book.id === payload.id) {
          console.log(payload.amount);

          return { ...book, amount: payload.amount };
        } else return book;
      });

      console.log(newBooksArray);

      return {
        ...state,
        books: newBooksArray,
      };

    default:
      break;
  }
};

const calculateTotal = items => {
  return items.reduce((acc, item) => acc + item.price * item.amount, 0);
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (newItem, amount) => {
    dispatch({
      type: ACTIONS.ADD_BOOK_TO_CART,
      payload: { item: newItem, amount },
    });
    updateTotal();
  };
  const handleRemove = id => {
    dispatch({ type: ACTIONS.REMOVE_BOOK_FROM_CART, payload: { id } });
    updateTotal();
  };

  const updateBooks = (id, amount) => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id: Number(id), amount: Number(amount) },
    });
    updateTotal();
  };

  const updateTotal = () => {
    dispatch({ type: ACTIONS.UPDATE_TOTAL });
  };
  const value = { state, handleAdd, handleRemove, updateBooks };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) throw new Error("there is something wrong ");
  return context;
};
export default CartProvider;
