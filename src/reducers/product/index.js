import initialState from '../../store/initialState';
import newProductReducer from './newProductReducer';

export default (state = initialState, action) => {
  const newProduct = newProductReducer(state, action);

  return newProduct || state;
};
