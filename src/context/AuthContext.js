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

const signin = (dispatch) => {
	return ({ email, password }) => {
		// try to sign in
		//handle success by updating state
		//handleFailure by sending error message
	};
};

const signout = (dispatch) => {
	return () => {};
};

export const { Provider, Context } = createDataContext(authReducer, { signin, signout, signup }, { token: null, errorMessage: ''});
