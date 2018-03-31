import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './CardSection';
// need the children prop to use { children } in Text section
const Confirm = ({ children, visible, onAccept, onDecline }) => {
	// will show up as props.children {children}
	// onAccept, is just a reference, same thing with onDecline, call when needed
	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View>
				<CardSection>
					<Text>
						{children}
					</Text>
				</CardSection>
				<CardSection>
					<Button whenClicked={onAccept}>Yes</Button>
					<Button whenClicked={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

export { Confirm };
