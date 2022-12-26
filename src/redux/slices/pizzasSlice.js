import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const requestForPizzas = createAsyncThunk(
	'pizzas/requestForPizzasStatus',
	async (params) => {
		const { category, stortBy, oreder, search } = params

		const response = await axios.get(`https://638c6f4dd2fc4a058a57acbe.mockapi.io/items?
		${category}
		&sortBy=${stortBy}
		&order=${oreder}
		${search}`)

		return response.data
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
		[requestForPizzas.rejected]: (state, action) => {
			state.items = [];
			state.status = 'error';
		}
	}});

export const { setItems } = pizzasSlice.actions;


export default pizzasSlice.reducer;
