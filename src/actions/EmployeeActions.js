import {
	EMPLOYEE_UPDATE
} from './types';
// allows you to update multiple different props, flexible action creator
export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
};