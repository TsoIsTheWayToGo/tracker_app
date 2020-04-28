import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

const SigninScreen = ({ navigation }) => {
	return (
		<View>
			<Text>SigninScreen</Text>
			<Button title="go to signIn screen" onPress={() => navigation.pop()} />
			<Button title="go to mainFlow" onPress={() => navigation.navigate('mainFlow')} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SigninScreen;
