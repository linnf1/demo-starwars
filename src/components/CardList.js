import React from 'react';
import Card from './Card';


const CardList = ({ stars }) => {
	return( 
	<div>
	{stars.map((u, i)  => {
		return (<Card 
			imag={stars[i].imag} 
			key={stars[i].height} 
			name={stars[i].name} 
			gender={stars[i].gender} 
			birth_year={stars[i].birth_year}
			/>);

	})
}
  </div>
	)
	}
export default CardList;