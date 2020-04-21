import {CHANGE_SEARCH_FIELDS} from './constants.js'

const intialState = {
	searchField: ''
}
export const searchRobots = (state= intialState, action = {}) =>{
switch(action.type) {
	case: CHANGE_SEARCH_FIELDS:
	return Object.assign({}, state,searchField: action.payload);
	default: 
		return state;
}
}