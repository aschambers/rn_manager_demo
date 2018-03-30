import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;
		// set default shift to Monday if shift not set, so a value is always set
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	// {...this.props} -> take all the props that employeeCreate was passed
	// and forward them onto employeeForm as well.
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} /> 
				<CardSection>
					<Button whenClicked={this.onButtonPress.bind(this)}>
						Create
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
