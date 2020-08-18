import initialState from '../../store/initialState';
import signupReducer from './signupReducer';

export default (state = initialState, action) => {
  const signup = signupReducer(state, action);

  return signup || state;
};
