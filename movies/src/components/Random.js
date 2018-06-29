import React from 'react';
import '../App.css';

const Random = props => 
{
	return (
		<div>
			<img src={props.image} alt="film"/>
			<div className="title">{props.name}</div>
        	<h4>{props.year}</h4>
		</div>
		)
}

export default Random