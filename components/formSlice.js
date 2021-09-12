import { createSlice } from "@reduxjs/toolkit";
import data from "../data-dummy/data.json";

const formSlice = createSlice({
  name: "formList",
  initialState: [
    {
      id: 1,
      title: "Title 1",
      quantity: 1,
      price: 11000,
    },
    {
      id: 2,
      title: "Title 2",
      quantity: 2,
      price: 22000,
    },
  ],

  reducers: {
    addList: (state, action) => {
      const newList = {
        id: state.length + 1,
        title: action.payload.title,
        quantity: action.payload.quantity,
        price: action.payload.price,
      };
      state.push(newList);
    },
    updateList: (state, action) => {
      const index = state.findIndex((list) => list.id !== action.payload.id);
      state[index].title = action.payload.title;
      state[index].quantity = action.payload.quantity;
      state[index].price = action.payload.price;
    },

    deleteList: (state, action) => {
      return state.filter((list) => list.id !== action.payload.id);
    },
  },
});

export const { addList, updateList, deleteList } = formSlice.actions;

export default formSlice.reducer;
