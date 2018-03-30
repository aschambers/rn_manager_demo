import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Name" 
						placeholder="Jane" 
						value={this.props.name} 
						onChangeText={name => this.props.employeeUpdate({ prop: 'name', value: name })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Phone" 
						placeholder="555-555-5555" 
						value={this.props.phone} 
						onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })} 
					/>
				</CardSection>
				<CardSection>
					<Picker
						// expand to fill all available area
						style={{ flex: 1}}
						selectedValue={this.props.shift}
						onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day})}
					>
						<Picker.Item label="Monday" values="Monday" />
						<Picker.Item label="Tuesday" values="Tuesday" />
						<Picker.Item label="Wednesday" values="Wednesday" />
						<Picker.Item label="Thursday" values="Thursday" />
						<Picker.Item label="Friday" values="Friday" />
						<Picker.Item label="Saturday" values="Saturday" />
						<Picker.Item label="Sunday" values="Sunday" />
					</Picker>
				</CardSection>
				<CardSection>
					<Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
