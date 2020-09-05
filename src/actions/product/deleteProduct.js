import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DELETE_PRODUCT_URL, UPDATE_PRODUCT_URL,ADD_REMOVE_BEST_PRODUCT_URL,ADD_QTY_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const deleteProduct = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_PRODUCT_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.DELETE_PRODUCT_START,
      onEnd: productActionTypes.DELETE_PRODUCT_END,
      onSuccess: productActionTypes.DELETE_PRODUCT_SUCCESS,
      onFailure: productActionTypes.DELETE_PRODUCT_FAILURE,
    })
  );
  const updateProduct = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_PRODUCT_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.UPDATE_PRODUCT_START,
      onEnd: productActionTypes.UPDATE_PRODUCT_END,
      onSuccess: productActionTypes.UPDATE_PRODUCT_SUCCESS,
      onFailure: productActionTypes.UPDATE_PRODUCT_FAILURE,
    })
  );
  const addRemoveBestProduct = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${ADD_REMOVE_BEST_PRODUCT_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.BEST_PRODUCT_START,
      onEnd: productActionTypes.BEST_PRODUCT_END,
      onSuccess: productActionTypes.BEST_PRODUCT_SUCCESS,
      onFailure: productActionTypes.BEST_PRODUCT_FAILURE,
    })
  );
  const addProductQty = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${ADD_QTY_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.ADD_QTY_START,
      onEnd: productActionTypes.ADD_QTY_END,
      onSuccess: productActionTypes.ADD_QTY_SUCCESS,
      onFailure: productActionTypes.ADD_QTY_FAILURE,
    })
  );
export default {deleteProduct, updateProduct, addRemoveBestProduct,addProductQty}