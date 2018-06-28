import React from 'react';
import '../App.css';

const Favorite = props => 
	{
		return(		
		<div>
			<div className="title">{props.name}</div>
        	<img src={props.image} alt="photo"/>
		</div>
		)
	}

export default Favorite;