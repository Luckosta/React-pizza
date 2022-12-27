import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	searchValue: '',
	categoryId: 0,
	sortType: {
		name: 'популярности',
		sortProp: 'rating'
	}
};


const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.categoryId = action.payload;
		},
		setSortType: (state, action) => {
			state.sortType = action.payload;
		},
		setSearch: (state, action) => {
			state.searchValue = action.payload;
		}
	},
});

export const selectFilter = state => state.filter;
export const selectSort = state => state.filter.sortType;
export const selectSearсh = state => state.filter.searchValue;

export const { setCategoryId, setSortType, setSearch } = filterSlice.actions;


export default filterSlice.reducer
