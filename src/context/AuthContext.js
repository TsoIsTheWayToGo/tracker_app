import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef'



const authReducer = (state, action) => {
	switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'signup':
			return {errorMessage: '', token: action.payload}
		case 'clear_error':
				return {...state, errorMessage: ''}
		case 'sign_out':
				return {token: null, errorMessage: ''}
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		//make api request to signup with that email and password
		// if we sign up, modify our state and say that we are authenticated
		//if signing up fails we need to reflect an error message

		try {
			const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token',response.data.token)
      dispatch({type: 'signup', payload: response.data.token})
      //navigate to the main flow
      navigate('TrackList')
		} catch (err) {
			dispatch({type: 'add_error', payload: 'Something went wrong'})
		}
	};
};

const signin = (dispatch) => async({ email, password }) => {

		// try to sign in
		//handle success by updating state
		//handleFailure by sending error message
			try {
			const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token',response.data.token)
      dispatch({type: 'signup', payload: response.data.token})
      //navigate to the main flow
      navigate('TrackList')
		} catch (err) {
			dispatch({type: 'add_error', payload: 'Something went wrong'})
		}
	}	

const tryLocalSignIn = dispatch => async () => {
	const token = AsyncStorage.getItem('Token')
	if(token){
		dispatch({type: 'signup', payload: token})
		navigate('TrackList')
	}else{
		navigate('signup')
	}
}

const clearErrorMessage = dispatch => () => {
	dispatch({type: 'clear_error'})
}

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem('token')
	dispatch({type: 'sign_out'})
	navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(authReducer, { signin, signout, signup, clearErrorMessage, tryLocalSignIn }, { token: null, errorMessage: ''});
