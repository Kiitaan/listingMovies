import React from 'react';
import '../App.css';

const Movie = props => 
{
	return (
		<div>

			<img src={props.image} alt="film"/>
			<h3 className="title">{props.title}</h3>
			<h4>{props.year}</h4>
			<button onClick= {() => props.addM(props.title)}>ADD</button>

		</div>
		)
}

export default Movie
