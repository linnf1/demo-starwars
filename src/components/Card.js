import React from 'react';
import x2 from './x2.png';


const Card = ({imag, name, gender, birth_year}) => {
	return(
	<div className="tc dib br3 pa3 ma2 bw2 dim shadow-5">
		<img src={x2} alt='ship' className="thumb"/>
		<p className="ph3">
		<a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib yellow">{name}</a>
		</p>
		<p>{imag}</p>
		<p>{gender}</p>
		<p>{birth_year}</p>
	</div>
	);
}


export default Card;