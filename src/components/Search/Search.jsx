import React from 'react';
import iconSearch from './search.svg';
import iconClose from './close.svg';
function Search({value, changeValue}) {

	return (
		<div className='search__container'>
			<img src={iconSearch} alt="" />
			<input 
			value={value}
			onChange={(event)=>changeValue(event.target.value)} 
			className='search__input' 
			placeholder='Поиск пиццы'/>
			{value && <img onClick={()=>changeValue('')} src={iconClose} alt="" />}

		</div>


	)
}

export default Search;