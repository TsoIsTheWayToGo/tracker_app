import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

const SigninScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<>
			<Spacer>
				<Text h3>Signip for Tracker App</Text>
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
				<Button title="Sign in" onPress={() => navigation.navigate('mainFlow')} />
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({});

export default SigninScreen;
