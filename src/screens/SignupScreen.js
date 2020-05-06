import React, { useState, useReducer, useContext } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);
	
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Spacer>
				<Text h3>Signup for Tracker App</Text>
			</Spacer>

			<Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
			<Spacer />
			<Input
				secureTextEntry
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Spacer>
				<Button title="Sign Up" onPress={() => signup({ email, password }) }/>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({});

export default SignupScreen;
