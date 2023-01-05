import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FilterSliceState, Sort, SortPropEnum } from './sliceTypes';




const initialState: FilterSliceState = {
   searchValue: "",
   categoryId: 0,
   sortType: {
      name: "популярности",
      sortProp: SortPropEnum.RATING_DESC,
   },
};

const filterSlice = createSlice({
   name: "filters",
   initialState,
   reducers: {
      setCategoryId: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload;
      },
      setSortType: (state, action: PayloadAction<Sort>) => {
         state.sortType = action.payload;
      },
      setSearch: (state, action: PayloadAction<string>) => {
         state.searchValue = action.payload;
      },
   },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sortType;
export const selectSearсh = (state: RootState) => state.filter.searchValue;

export const { setCategoryId, setSortType, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
