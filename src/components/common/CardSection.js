import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	// pass on properties of CardSection to children
	// if we pass in an array, the style on the right, will override the left style
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export { CardSection };
