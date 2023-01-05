import { SortPropEnum } from '../../redux/slices/sliceTypes';
import { sortItem } from './Sort.type';

export const sortItems: sortItem[] = [
	{
		name: 'популярности(убыв.)',
		sortProp: SortPropEnum.RATING_ASC
	},
	{
		name: 'популярности(возр.)',
		sortProp: SortPropEnum.RATING_DESC
	},
	{
		name: 'цене(убыв.)',
		sortProp: SortPropEnum.PRICE_ASC
	},
	{
		name: 'цене(возр.)',
		sortProp: SortPropEnum.PRICE_DESC
	},
	{
		name: 'алфавиту(убыв.)',
		sortProp: SortPropEnum.TITLE_ASC
	},
	{
		name: 'алфавиту(возр.)',
		sortProp: SortPropEnum.TITLE_DESC
	}];
