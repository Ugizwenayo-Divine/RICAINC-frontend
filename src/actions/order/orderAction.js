import { orderActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ORDER_URL,CLIENT_ORDERS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const addOrder = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ORDER_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: orderActionTypes.ORDER_PRODUCT_START,
      onEnd: orderActionTypes.ORDER_PRODUCT_END,
      onSuccess: orderActionTypes.ORDER_PRODUCT_SUCCESS,
      onFailure: orderActionTypes.ORDER_PRODUCT_FAILURE,
    })
  );
  const getClientOrders= (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: CLIENT_ORDERS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: orderActionTypes.CLIENT_ORDERS_START,
      onEnd: orderActionTypes.CLIENT_ORDERS_END,
      onSuccess: orderActionTypes.CLIENT_ORDERS_SUCCESS,
      onFailure: orderActionTypes.CLIENT_ORDERS_FAILURE,
    })
  );

  export default {addOrder, getClientOrders}