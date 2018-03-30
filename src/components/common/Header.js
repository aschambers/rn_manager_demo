// import libraries for making a component
import React from 'react';
// View lets us style components inside of our application
import { Text, View } from 'react-native';
// make a component, don't need () if only a single line of jsx
// this is a child component of App (root component)
// only root component uses 'AppRegistry', the component we display first
// props is a reference to props object from the parent
// parent component must pass in a headerText prop
const Header = (props) => {
	// example of destructuring
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};
// styles component, by convention it's under our component
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};
// make the component available to other parts of the app
export { Header };
