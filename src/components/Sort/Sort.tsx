import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSortType } from '../../redux/slices/filterSlice';


type sortItem = {
	name: string,
	sortProp: string
};



const sortItems:sortItem[] = [
	{
		name: 'популярности(убыв.)',
		sortProp: '-rating'
	},
	{
		name: 'популярности(возр.)',
		sortProp: 'rating'
	},
	{
		name: 'цене(убыв.)',
		sortProp: '-price'
	},
	{
		name: 'цене(возр.)',
		sortProp: 'price'
	},
	{
		name: 'алфавиту(убыв.)',
		sortProp: '-title'
	},
	{
		name: 'алфавиту(возр.)',
		sortProp: 'title'
	}];




function Sort(): JSX.Element {
	const sortRef = useRef<HTMLDivElement>(null);
	const sortType = useSelector(selectSort);
	const dispathSortType = useDispatch();


	const [sortState, setSortState] = useState<boolean>(false);

	const popupOnClick = (obj:sortItem) => {
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
				<span onClick={() => setSortState(!sortState)}>{sortType.name}</span>
			</div>
			{sortState && (<div className="sort__popup">
				<ul>
					{sortItems.map((obj, index) => {
						return (
							<li
								key={index}
								onClick={() => popupOnClick(obj)}
								className={sortType.sortProp === obj.sortProp ? 'active' : ''}
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

export default Sort; 