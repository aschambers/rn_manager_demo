import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGGING_USER_IN
} from '../actions/types';
// just to let people know what the purpose of the AuthReducer is, not necessary
const INITIAL_STATE = { 
	email: '', 
	password: '', 
	user: null,
	error: '',
	loading: false
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
		case LOGGING_USER_IN:
			// clear out any existing error message
			return { ...state, loading: true, error: '' }
		case LOGIN_USER_SUCCESS:
			// ...INITIAL_STATE is resetting back to initial state, so set email: '', etc.
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			// if user fails to login, reset the password to ''
			return { ...state, error: 'Authentication Failed.', password: '', loading: false };
		default:
			return state;
	}
};
