import React, { useState, useReducer, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/spacer';
const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Signup"
				errorMessage={state.errorMessage}
				onSubmit={({ email, password }) => signup({ email, password })}
				submitButtonText={'Sign Up'}
			/>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<Spacer>
				<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
					<Text>Already have an account? Sign In</Text>
				</TouchableOpacity>
			</Spacer>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250,
	},
	error: {
		color: 'red',
		alignSelf: 'center',
	},
});

export default SignupScreen;
