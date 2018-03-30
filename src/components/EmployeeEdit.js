import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
	componentWillMount() {
		// iterate through all employees on object, and update reducer with every prop
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		// whenever we come to employee edit, only way we can navigate is by clicking
		// or tapping on an employee, and the list item passes the uid, so we have 
		// access to it as props
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button whenClicked={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate, employeeSave 
})(EmployeeEdit);



