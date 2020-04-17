import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
 
	class App extends Component {
		constructor() {
			super()
			this.state = 
			{
 				robots: robots,
 				searchfields: ''
			}
	    }
	    onSearchChange = (event) =>  {
	   	//console.log(event.target.value); 
	   	this.setState({searchfields: event.target.value})
	   /*  const filteredRobots = this.state.robots.filter(robots =>{
	   	return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());*/
	 // console.log(filteredRobots);
	}

	render() {
		 const filteredRobots = this.state.robots.filter(robots =>{
	   	return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
	   })
	return (
	<div className='tc'>
		<h1> RoboFriends </h1>
		<SearchBox searchChange = {this.onSearchChange}/>  
		<CardList robots = {filteredRobots} />
	</div>
);
}
}

export default App;