import React from 'react';
import iconSearch from './search.svg';
import iconClose from './close.svg';
import { useContext } from 'react';
import { SearchContext } from '../../App';


function Search() {

	const {searchValue, setSearchValue} = useContext(SearchContext);

	return (
		<div className='search__container'>
			<img src={iconSearch} alt="" />
			<input 
			value={searchValue}
			onChange={(event)=>setSearchValue(event.target.value)} 
			className='search__input' 
			placeholder='Поиск пиццы'/>
			{searchValue && <img 
			onClick={()=>setSearchValue('')} 
			src={iconClose} 
			alt="" />}

		</div>


	)
}

export default Search;