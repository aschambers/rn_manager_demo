import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		// have access to this from importing action
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		// have access to this from importing action
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="user@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Button whenClicked={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser 
})(LoginForm);
