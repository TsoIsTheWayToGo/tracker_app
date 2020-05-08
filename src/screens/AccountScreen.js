import React, { useState, useReducer, useContext } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView} from 'react-navigation'
import Spacer from '../components/spacer';
const AccountScreen = ({ navigation }) => {
	const {signout} = useContext(AuthContext)
	return (
		<SafeAreaView>
			<Text style={{fontSize: 48}}>Account</Text>
			<Button title="Sign Out" onPress={()=>signout()}/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
