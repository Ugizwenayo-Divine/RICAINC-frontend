import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DELETE_PRODUCT_URL } from '../../helpers/backendURLs';

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
export default {deleteProduct}