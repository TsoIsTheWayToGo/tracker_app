import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

const TrackCreateScreen = ({ navigation }) => {
	return (
		<View>
			<Text>TrackCreateScreen</Text>
		</View>
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

export default TrackCreateScreen;
