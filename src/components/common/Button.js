import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenClicked, children }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		// onPress = props.whenClicked from parent, run function
		<TouchableOpacity onPress={whenClicked} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
}
// export object with key of Button and value of Button { Button: Button } -> { Button }
export { Button };
