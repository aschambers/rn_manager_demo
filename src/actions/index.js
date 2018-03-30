import firebase from 'firebase';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGGING_USER_IN
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

export const loginUser = ({ email, password }) => {
	// reduxThunk will see we are returning a function, and immediately
	// call that function. Once request is complete, .then runs and we
	// dispatch an action. This waits for the function to finish before
	// dispatching an action, instead of immediately returning an action
	return (dispatch) => {
		dispatch({ type: LOGGING_USER_IN });
		firebase.auth().signInWithEmailAndPassword(email, password)
		// take user and call helper method
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
		});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	})
}
