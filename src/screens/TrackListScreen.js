import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const TrackListScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>TrackListScreen</Text>
			<Button title="go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
		</SafeAreaView>
	);
};
TrackListScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({});

export default TrackListScreen;
