import React from 'react';
import Cards from './Cards';

const CardList = ({robots}) => {
	/* const cardArray = */
	/*
if(true){
		throw new Error('Nooooo!');
	}    // for error boundery checking
	*/
	return (
	<div> 
	{
		robots.map((user, i) => {
		return (
			<Cards key= {i} 
			id={robots[i].id} 
			name={robots[i].name} 
			username={robots[i].username} 
			email={robots[i].email} 
			/> 
			);
		})
	}
	</div>
);
}
export default CardList;