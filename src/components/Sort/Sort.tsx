import React, { memo, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSortType, Sort, SortPropEnum } from '../../redux/slices/filterSlice';


type sortItem = {
	name: string,
	sortProp: SortPropEnum
};



const sortItems: sortItem[] = [
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

type SortProps = {
	sortValue: Sort
};


const SortPopup = memo(function SortPopup({sortValue}:SortProps): JSX.Element {
	const sortRef = useRef<HTMLDivElement>(null);
	
	const dispathSortType = useDispatch();


	const [sortState, setSortState] = useState<boolean>(false);

	const popupOnClick = (obj: sortItem) => {
		dispathSortType(setSortType(obj));
		setSortState(false);

	}

	useEffect(() => {
		// Did mount 
		const handleClickOutside = (event: MouseEvent) => {
			if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
				setSortState(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);

		// Unmount 
		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])



	return (
		<div ref={sortRef} className="sort">
			<div className="sort__label">
				<div className={sortState ? 'label__svg-active' : ''} >
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#2C2C2C"
						/>
					</svg>
				</div>
				<b>Сортировка по:</b>
				<span onClick={() => setSortState(!sortState)}>{sortValue.name}</span>
			</div>
			{sortState && (<div className="sort__popup">
				<ul>
					{sortItems.map((obj, index) => {
						return (
							<li
								key={index}
								onClick={() => popupOnClick(obj)}
								className={sortValue.sortProp === obj.sortProp ? 'active' : ''}
							>
								{obj.name}
							</li>
						)
					})}
				</ul>
			</div>)}
		</div>
	);
}
)
export default SortPopup; 