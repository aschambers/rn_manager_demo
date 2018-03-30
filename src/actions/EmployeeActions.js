import firebase from 'firebase';
import {
	EMPLOYEE_UPDATE
} from './types';
// allows you to update multiple different props, flexible action creator
// prop could be name, phone or shift
export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
};

export const employeeCreate = ({ name, phone, shift }) => {
	// get currently authenticated user, the user model
	const { currentUser } = firebase.auth();
	// get access to our firebase database, and make reference
	// to /users/userId/employees, a path to the json data store
	// where userId = current user that is authenticated
	firebase.database().ref(`/users/${currentUser.uid}/employees`)
	.push({ name, phone, shift });
};