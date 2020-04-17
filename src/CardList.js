import React from 'react';
import Cards from './Cards';

const CardList = ({robots}) => {
	return (
	<div>
		<Cards id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
    	<Cards id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
    	<Cards id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}/>
    </div>
);
}
export default CardList;