import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../helpers/calcTotalPrice";
import { getCartItems } from "../../helpers/getCartItems";
import { RootState } from "../store";

export type CartItemType = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   count: number;
   type: string;
   size: number;
};

interface CartSliceState {
   items: CartItemType[];
   totalPrice: number;
}

const { items, totalPrice } = getCartItems();

const initialState: CartSliceState = {
   items,
   totalPrice,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addProduct(state, action: PayloadAction<CartItemType>) {
         const findItem = state.items.find(
            (obj) => obj.id === action.payload.id
         );
         if (findItem) {
            findItem.count++;
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
            });
         }

         state.totalPrice = calcTotalPrice(state.items);
      },
      minusItem(state, action: PayloadAction<string>) {
         const findItem = state.items.find((obj) => obj.id === action.payload);

         if (findItem) {
            findItem.count--;
         }
      },
      removeProduct(state, action: PayloadAction<string>) {
         state.items = state.items.filter((obj) => obj.id !== action.payload);
      },
      clearCart(state) {
         state.items = [];
         state.totalPrice = 0;
      },
   },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
   state.cart.items.find((obj) => obj.id === id);

export const { addProduct, minusItem, removeProduct, clearCart } =
   cartSlice.actions;

export default cartSlice.reducer;
