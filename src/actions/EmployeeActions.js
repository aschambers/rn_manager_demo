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
	console.log(name, phone, shift);
};