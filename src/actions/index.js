import firebase from 'firebase';
import { 
	EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS 
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
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => {
			dispatch({ 
				type: LOGIN_USER_SUCCESS, 
				payload: user 
			});
		})
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({ 
					type: LOGIN_USER_SUCCESS, 
					payload: user 
				});
			});
		});
	};
};

// const loginUserSuccess = (dispatch, user) => {
// 	dispatch({
// 		type: LOGIN_USER_SUCCESS,
// 		payload: user
// 	})
// }
