import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

	class App extends Component {
		constructor() {
			super()
			this.state = 
			{
 				robots: [],
 				searchfields: ''
			}
	    }

	    componentDidMount(){
	    	fetch('https://jsonplaceholder.typicode.com/users').then(response => {
	    	return response.json();
	    	})
	    	.then(users => {
	    		this.setState({robots: users})
	    	})
	    }

	    onSearchChange = (event) =>  {
	   	//console.log(event.target.value); 
	   	this.setState({searchfields: event.target.value})
	   /*  const filteredRobots = this.state.robots.filter(robots =>{
	   	return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());*/
	 // console.log(filteredRobots);
	}

	render() {
		const { searchfields , robots } = this.state;
		 const filteredRobots = robots.filter(robot =>{
		
	   	return robot.name.toLowerCase().includes(searchfields.toLowerCase());
	   })
		return !robots.length?
		  <h1>Loading </h1> :
		 (
	 
	<div className='tc'>
		<h1 className= 'f1'> RoboFriends </h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<Scroll>  
		<ErrorBoundry>
		<CardList robots = {filteredRobots} />
		</ErrorBoundry>
		</Scroll>
	</div>
);}

}

export default App;