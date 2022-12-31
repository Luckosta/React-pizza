import iconSearch from './search.svg';
import iconClose from './close.svg';
import { useRef, useCallback, useState } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice';




function Search(): JSX.Element {

	const dispatсh = useDispatch();
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const onClickClear = () => {
		
		dispatсh(setSearch(''));
		setValue('');
		inputRef.current?.focus?.(); //optional chaining
	};


	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatсh(setSearch(str));
		}, 500), []
	);


	const onChnageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	return (
		<div className='search__container'>
			<img src={iconSearch} alt="" />
			<input
				ref={inputRef}
				value={value}
				onChange={onChnageInput}
				className='search__input'
				placeholder='Поиск пиццы' />
			{value && <img
				onClick={onClickClear}
				src={iconClose}
				alt="" />}
		</div>


	)
}

export default Search;