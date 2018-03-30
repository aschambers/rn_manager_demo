import {
	EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMPLOYEE_UPDATE:
			// looks like.. action.payload === { prop: 'name', value: 'jane' }
			// key interpolation, determined at runtime, not an array
			// if prop is name, [action.payload.prop] will turn into name
			return { ...state, [action.payload.prop]: action.payload.value }
		default:
			return state;
	}
}