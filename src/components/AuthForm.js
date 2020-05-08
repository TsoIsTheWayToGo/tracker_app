import React, { useState, useReducer } from 'react';
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Spacer from '../components/spacer';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
		<>
			<Spacer>
				<Text h3>{headerText} for Tracker</Text>
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

			<Spacer>
				<Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
			</Spacer>
			{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
		</>
  );
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

export default AuthForm;