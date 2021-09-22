import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const formSlice = createSlice({
  name: "formList",
  initialState: (typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("FormList"))) || [
    {
      id: 1,
      title: "Title 1",
      quantity: 11,
      price: 11000,
    },
    {
      id: 2,
      title: "Title 2",
      quantity: 22,
      price: 22000,
    },
  ],

  reducers: {
    addList: (state, action) => {
      const newList = {
        id: uid(),
        title: action.payload.title,
        quantity: action.payload.quantity,
        price: action.payload.price,
      };
      state.push(newList);
      if (typeof window !== "undefined") {
        localStorage.setItem("FormList", JSON.stringify(state));
        console.log(localStorage.getItem("FormList"));
      }
    },

    updateList: (state, action) => {
      const index = state.findIndex((list) => list.id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].quantity = action.payload.quantity;
      state[index].price = action.payload.price;
      localStorage.setItem("FormList", JSON.stringify(state));
      console.log(localStorage.getItem("FormList"));
    },

    deleteList: (state, action) => {
      const filteredState = state.filter(
        (list) => list.id !== action.payload.id
      );
      localStorage.setItem("FormList", JSON.stringify(filteredState));
      return filteredState;
    },
  },
});

export const { addList, updateList, deleteList } = formSlice.actions;

export default formSlice.reducer;
