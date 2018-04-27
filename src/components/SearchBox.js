import React from 'react';


const SearchBox = ({ searchField, searchChange}) => {
	return(
		<div className=''>
		<input 
		type='search' 
		placeholder='Find a hero..' 
		className='pa2 ba b--yellow bg-lightest-gray'
		onChange={searchChange}/>
		</div>
		);
}

export default SearchBox;