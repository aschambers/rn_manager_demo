import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
	// as soon as it's about to be rendered, fetch list of employees
	// on first load, no employees, but then will attempt to get list of
	// employees
	componentWillMount() {
		this.props.employeesFetch();
			
		this.createDataSource(this.props);
	}
	// recreate data source, this time we will have access to employees
	componentWillReceiveProps(nextProps) {
		// nextProps are the next set of props that this component
		// will be rendered with. this.props, is still the old set of props
		this.createDataSource(nextProps);
	}
	// be called with a props object, always be attempting to create a data source
	createDataSource({ employees }) {
		const lvds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		// will be empty as the request won't quite be complete
		this.dataSource = lvds.cloneWithRows(employees);
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
