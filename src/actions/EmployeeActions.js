import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE
} from './types';
// allows you to update multiple different props, flexible action creator
// prop could be name, phone or shift
export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
};

// we don't need to dispatch an action, just need to pretend like
// we are using reduxThunk
export const employeeCreate = ({ name, phone, shift }) => {
	// get currently authenticated user, the user model
	const { currentUser } = firebase.auth();
	// get access to our firebase database, and make reference
	// to /users/userId/employees, a path to the json data store
	// where userId = current user that is authenticated
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.push({ name, phone, shift })
		// to return back to the employee list, if we do Actions.employeeList()
		// it will have double-stacking behavior, we don't want that.
		.then(() => {
			// when we see this type, reset form fields
			dispatch({ type: EMPLOYEE_CREATE });
			Actions.pop();
		});
	};
};