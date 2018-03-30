import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
