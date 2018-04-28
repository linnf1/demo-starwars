import React from 'react';
import Card from './Card';


const CardList = ({ stars }) => {
	return( 
	<div>
	{stars.map((u, i)  => {
		return (<Card 
			model={stars[i].model} 
			name={stars[i].name} 
			manufacturer={stars[i].manufacturer} 
			/>);

	})
}
  </div>
	)
	}
export default CardList;