import { Sort, SortPropEnum } from '../../redux/slices/sliceTypes';

export type sortItem = {
	name: string,
	sortProp: SortPropEnum
};


export type SortProps = {
	sortValue: Sort
};