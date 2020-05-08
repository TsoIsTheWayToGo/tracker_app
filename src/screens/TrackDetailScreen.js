import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
const TrackDetailScreen = ({ navigation }) => {
	return (
		<SafeAreaView forceInset={{top: 'always'}}>
			<Text>TrackDetailScreen</Text>

		</SafeAreaView>
	);
};
TrackDetailScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
