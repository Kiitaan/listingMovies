import React from 'react';
import '../App.css';

const Favorite = props => 
{
	return	(		
		<div>

			<img src={props.image} alt="film"/>
			<div className="title">{props.name}</div>
        	<h4>{props.year}</h4>
        	<button onClick= {() => props.remove(props.name)}>REMOVE</button>

		</div>
			)
}

export default Favorite