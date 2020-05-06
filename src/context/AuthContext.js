import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
const authReducer = (state, action) => {
	switch (action.type) {
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
			console.log(response.data);
		} catch (err) {
			console.log(err.message);
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

export const { Provider, Context } = createDataContext(authReducer, { signin, signout, signup }, { isSignedIn: false });
