import initialState from '../../store/initialState';
import resetReducer from './resetPassword';
import updatePasswordReducer from './updatePassword';

const reset = (state = initialState, action) => {
  const resetPassword = resetReducer(state, action);

  return resetPassword || state;
};
const updatePassword = (state = initialState, action) => {
  const resetPassword = updatePasswordReducer(state, action);

  return resetPassword || state;
};

export default {reset, updatePassword};