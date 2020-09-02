import initialState from '../../store/initialState';
import newProductReducer from './newProductReducer';
import deleteProductReducer from './deleteProductReducer';

const product = (state = initialState, action) => {
  const newProduct = newProductReducer(state, action);

  return newProduct || state;
};
const deleteProduct = (state = initialState, action) => {
  const newProduct = deleteProductReducer(state, action);

  return newProduct || state;
};
export default {product,deleteProduct}