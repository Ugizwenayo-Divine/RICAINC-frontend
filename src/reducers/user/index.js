import initialState from '../../store/initialState';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import allUsersReducer from './displayUsersReducer';
import userLogoutReducer from './userLogoutReducer';
import deleteUserReducer from './deleteUserReducer';
import updateUserReducer from './updateUserReducer';

const user = (state = initialState, action) => {
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);

  return signup || login || state;
};
const allUsers = (state = initialState, action) => {
  const users = allUsersReducer(state, action);

  return users || state;
};
const userLogout = (state = initialState, action) => {
  const users = userLogoutReducer(state, action);

  return users || state;
};
const deleteUser = (state = initialState, action) => {
  const users = deleteUserReducer(state, action);

  return users || state;
};
const updateUser = (state = initialState, action) => {
  const users = updateUserReducer(state, action);

  return users || state;
};

export default {user, allUsers, userLogout, deleteUser, updateUser};