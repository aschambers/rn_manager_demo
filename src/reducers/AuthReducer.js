import { 
	EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS 
} from '../actions/types';
// just to let people know what the purpose of the AuthReducer is, not necessary
const INITIAL_STATE = { 
	email: '', password: '', user: null 
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch(action.type) {
		case EMAIL_CHANGED:
			// get original state, and overrite email property
			// with new value of email, have to produce new object
			// or else redux will think nothing changed
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};