import initialState from '../../store/initialState';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default (state = initialState, action) => {
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);

  return signup || login || state;
};
