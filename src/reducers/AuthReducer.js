import { EMAIL_CHANGED } from '../actions/types';
const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			// get original state, and overrite email property
			// with new value of email, have to produce new object
			// or else redux will think nothing changed
			return {...state, email: action.payload };
		default:
			return state;
	}
};