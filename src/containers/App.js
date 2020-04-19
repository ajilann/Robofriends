import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

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
		
		 const filteredRobots = this.state.robots.filter(robots =>{
	   	return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
	   })
		 if (this.state.robots.length === 0){
		 	return <h1>Loading </h1>
		 }
		 else {
	return (
	<div className='tc'>
		<h1 className= 'f1'> RoboFriends </h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<Scroll>  
		<CardList robots = {filteredRobots} />
		</Scroll>
	</div>
);}
}
}

export default App;