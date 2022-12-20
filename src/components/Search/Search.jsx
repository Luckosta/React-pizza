import iconSearch from './search.svg';
import iconClose from './close.svg';
import { useContext, useRef, useCallback, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';




function Search() {
	const [value, setValue] = useState('');
	const inputRef = useRef();
	const {setSearchValue } = useContext(SearchContext);

	const onClickClear = () => {
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	};


	const updateSearchValue = useCallback(
		debounce(str => {
			setSearchValue(str);
		}, 500), []
	);


	const onChnageInput = event => {
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
				onClick={() => onClickClear()}
				src={iconClose}
				alt="" />}
		</div>


	)
}

export default Search;