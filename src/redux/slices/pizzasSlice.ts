import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { PizzaItem } from './sliceTypes';

export const requestForPizzas = createAsyncThunk<
   PizzaItem[],
   Record<string, string>
>('pizzas/requestForPizzasStatus', async (params) => {
   const { category, stortBy, order, search } = params;

   const response = await axios.get<
      PizzaItem[]
   >(`https://638c6f4dd2fc4a058a57acbe.mockapi.io/items?
		${category}
		&sortBy=${stortBy}
		&order=${order}
		${search}`);

   //if (response.data.length === 0) {
   //   return thunkAPI.rejectWithValue();
   //}

   return response.data;
});

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
}

interface PizzaSliceState {
   items: PizzaItem[];
   status: Status;
}

const initialState: PizzaSliceState = {
   items: [],
   status: Status.LOADING,
};

const pizzasSlice = createSlice({
   name: 'pizzas',
   initialState,
   reducers: {
      setItems(state, action: PayloadAction<PizzaItem[]>) {
         state.items = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(requestForPizzas.pending, (state) => {
         state.items = [];
         state.status = Status.LOADING;
      });

      builder.addCase(
         requestForPizzas.fulfilled,
         (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
         }
      );

      builder.addCase(requestForPizzas.rejected, (state) => {
         state.items = [];
         state.status = Status.ERROR;
      });
   },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
