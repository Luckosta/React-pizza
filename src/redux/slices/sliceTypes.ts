export type CartItemType = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   count: number;
   type: string;
   size: number;
};

export interface CartSliceState {
   items: CartItemType[];
   totalPrice: number;
};



export interface PizzaItem {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   sizes: number[];
   types: number[];
};



export enum SortPropEnum {
	RATING_DESC ="rating",
	RATING_ASC ="-rating",
	TITLE_DESC = "title",
	TITLE_ASC = "-title",
	PRICE_DESC = "prirce", 
	PRICE_ASC = "-prirce" 
};

export type Sort = {
   name: string;
   sortProp: SortPropEnum;
};

export interface FilterSliceState {
   searchValue: string;
   categoryId: number;
   sortType: Sort;
};




