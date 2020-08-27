import { productActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { NEW_PRODUCT } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: NEW_PRODUCT,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: productActionTypes.CREATE_PRODUCT_REQUEST,
      onEnd: productActionTypes.CREATE_PRODUCT_END,
      onSuccess: productActionTypes.CREATE_PRODUCT_SUCCESS,
      onFailure: productActionTypes.CREATE_PRODUCT_FAILURE,
    })
  );
