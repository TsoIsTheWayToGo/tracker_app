import React, { useContext} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/spacer';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
		const { state, signin } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			
			<AuthForm
				headerText="Sign In"
				errorMessage={state.errorMessage}
				onSubmit={({email,password}) => signin({email, password})}
				submitButtonText={'Sign In'}
			/>
			<Spacer/>
		

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
