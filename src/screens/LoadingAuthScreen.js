import React, { useState, useReducer, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
const LoadingAuthScreen = ({navigation}) => {
	const {  tryLocalSignIn } = useContext(AuthContext);
  	useEffect(() => {
		tryLocalSignIn();
	}, []);
  return null;
};

const styles = StyleSheet.create({

})

export default LoadingAuthScreen;