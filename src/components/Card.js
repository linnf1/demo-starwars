import React from 'react';
import lite from './lite.png';

const Card = ({name, gender, birth_year}) => {
	return(
	<div className="tc bg-light-gray dib br3 pa3 ma2 bw2 dim shadow-5">
		<img src={lite} alt='ship' className="App-logo"/>
		<h2>{name}</h2>
		<p>{gender}</p>
		<p>{birth_year}</p>
	</div>
	);
}


export default Card;