import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state
      // Redux toolkit use immer behind the scene
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      // console.log("state :", state);
      // console.log(current(state));
      // RTK - either Mutate the existing state or return a new state
      // state.items.length = 0
      // state = [];
      // console.log(state);
      // state.items.length = 0;

      // or
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
