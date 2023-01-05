import { CartItemType } from '../redux/slices/sliceTypes';


export const calcTotalPrice = (items:CartItemType[]) => {
	return items.reduce((sum, obj) => {
		return obj.price * obj.count + sum;
	}, 0);
}