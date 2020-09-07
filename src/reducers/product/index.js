import initialState from '../../store/initialState';
import newProductReducer from './newProductReducer';
import deleteProductReducer from './deleteProductReducer';
import updateProductReducer from './updateProductReducer';
import bestProductReducer from './bestProductReducer';
import addQtyReducer from './addQtyReducer';

const product = (state = initialState, action) => {
  const newProduct = newProductReducer(state, action);

  return newProduct || state;
};
const deleteProduct = (state = initialState, action) => {
  const newProduct = deleteProductReducer(state, action);

  return newProduct || state;
};
const updateProduct = (state = initialState, action) => {
  const newProduct = updateProductReducer(state, action);

  return newProduct || state;
};
const bestProduct = (state = initialState, action) => {
  const newProduct = bestProductReducer(state, action);

  return newProduct || state;
};
const addQty = (state = initialState, action) => {
  const newProduct = addQtyReducer(state, action);

  return newProduct || state;
};
export default {product,deleteProduct, updateProduct, bestProduct,addQty};