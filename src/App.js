import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
		    apiKey: 'AIzaSyBESCKN4t9a458KQt1sIwhIsKK5xKu_bIY',
		    authDomain: 'vuejs-http-7d991.firebaseapp.com',
		    databaseURL: 'https://vuejs-http-7d991.firebaseio.com',
		    projectId: 'vuejs-http-7d991',
		    storageBucket: 'vuejs-http-7d991.appspot.com',
		    messagingSenderId: '9584545554'
		};
		firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
