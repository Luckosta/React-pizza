import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const requestForPizzas = createAsyncThunk(
	'pizzas/requestForPizzasStatus',
	async (params, thunkAPI) => {
		const { category, stortBy, oreder, search } = params;

		const response = await axios.get(`https://638c6f4dd2fc4a058a57acbe.mockapi.io/items?
		${category}
		&sortBy=${stortBy}
		&order=${oreder}
		${search}`);
		
		if (response.data.length === 0) {
			return thunkAPI.rejectWithValue();
		}

		return response.data;
	}
)





const initialState = {
	items: [],
	status: 'loading', // loading | success | error
};





const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		}
	},
	extraReducers: {
		[requestForPizzas.pending]: (state) => {
			state.items = [];
			state.status = 'loading';
		},
		[requestForPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},
		[requestForPizzas.rejected]: (state) => {
			state.items = [];
			state.status = 'error';
		}
	}
});

export const selectPizzas = state => state.pizzas;

export const { setItems } = pizzasSlice.actions;


export default pizzasSlice.reducer;
