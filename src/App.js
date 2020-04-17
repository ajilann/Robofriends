import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
	return (
	<div className='tc'>
		<h1> RoboFriends </h1>
		<input type='search' placeholder='search robots' />
		<CardList robots = {robots} />
	</div>
);} 
export default App;