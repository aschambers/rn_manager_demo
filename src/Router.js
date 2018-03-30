import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
// initial is the route/scene you want to see first
// add hideNavBar to generate because we already have header for login page
const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>
				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						key="employeeList" 
						component={EmployeeList} 
						title="Employees" 
						initial />
					<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
