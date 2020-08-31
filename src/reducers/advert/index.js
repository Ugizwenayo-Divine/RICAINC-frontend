import initialState from '../../store/initialState';
import newAdvertReducer from './newAdvertReducer';

export default (state = initialState, action) => {
  const newAdvert = newAdvertReducer(state, action);

  return newAdvert || state;
};
