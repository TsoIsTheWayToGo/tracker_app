import React, { useState, useReducer } from 'react';
import { StyleSheet, View, FlatList,  TouchableOpacity } from 'react-native';
import {Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/spacer'
const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


	return (
		<>
			<Spacer>
				<Text h3>Signup for Tracker App</Text>
			</Spacer>

			<Input
				label="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
			/>
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
				<Button title="Sign Up" onPress={() => navigation.navigate('mainFlow')} />
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({});

export default SignupScreen;
