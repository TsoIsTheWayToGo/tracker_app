import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
const TrackCreateScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>TrackCreateScreen</Text>
		</SafeAreaView>
	);
};
TrackCreateScreen.navigationOptions = () => {
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

export default TrackCreateScreen;
