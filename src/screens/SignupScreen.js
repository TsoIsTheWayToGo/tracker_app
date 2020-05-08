
import React, { useState, useReducer, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm'
const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(AuthContext);
	

	useEffect(()=> {
		tryLocalSignIn()
	}, [])

	
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
		headerShown: false
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250
	},
	error: {
		color: "red",
		alignSelf: 'center'
	}
});

export default SignupScreen;
