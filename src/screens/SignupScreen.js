import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
	return (
		<View>
			<Text>SignupScreen</Text>
      <Button title="go to signIn screen" onPress={()=> navigation.navigate('Signin')}/> 
      <Button title="go to mainFlow" onPress={()=> navigation.navigate('mainFlow')}/> 
		</View>
	);
};

const styles = StyleSheet.create({});

export default SignupScreen;
