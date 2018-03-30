import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
	// as soon as it's about to be rendered, fetch list of employees
	componentWillMount() {
		this.props.employeesFetch();
	}
	render() {
		return (
			<View>
				<Text>EmployeeList</Text>
				<Text>EmployeeList</Text>
				<Text>EmployeeList</Text>
				<Text>EmployeeList</Text>
				<Text>EmployeeList</Text>
				<Text>EmployeeList</Text>
			</View>
		);
	}
}

export default connect(null, { employeesFetch })(EmployeeList);
