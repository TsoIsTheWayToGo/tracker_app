import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text>TrackListScreen</Text>
			<Button title="go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
