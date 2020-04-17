import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Cards from './Cards';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';
import CardList from './CardList';

ReactDOM.render(
  <React.StrictMode>
  	<CardList robots = {robots} />
   {/* <Cards id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
    <Cards id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
    <Cards id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}/>*/} 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
