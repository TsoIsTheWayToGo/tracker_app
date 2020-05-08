import React, { useContext} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import {NavigationEvents} from 'react-navigation'
import Spacer from '../components/spacer';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';


const SigninScreen = ({ navigation }) => {
		const { state, signin, clearErrorMessage } = useContext(AuthContext);
		
		// navigation.addListener('blur', console.log('blurred'));
		// console.log(navigation.addListener);
		
		
	return (
		<View style={styles.container}>
			<NavigationEvents
				// if you put navigationEvents on this component it is talking about when this component get navigated to
				//when you click a link and you are about navigate to this screen
					//onWillFocus is called when press to go to another page so before the transistion is complete
				onWillFocus={() => clearErrorMessage()} 
					//onDidFocus is called after you get to the other screen
				// onDidFocus={() => {console.log('Rosario')}}
				
				
				// blur={()=>clearErrorMessage}
				// navigate from this screen
				// onWillBlur={clearErrorMessage}
				// onDidBlur={console.log('is Sexy')}
			/>
			
			<AuthForm
				headerText="Sign In"
				errorMessage={state.errorMessage}
				onSubmit={({ email, password }) => signin({ email, password })}
				submitButtonText={'Sign In'}
			/>
			<Spacer />

			<Spacer>
				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<Text>Don't have an account? Sign Up</Text>
				</TouchableOpacity>
			</Spacer>
		</View>
	);
};

SigninScreen.navigationOptions = () => {
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
});

export default SigninScreen;
