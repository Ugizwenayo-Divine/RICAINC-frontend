import axiosHelper from '../helpers/axiosHelper';
import { apiActionsTypes } from '../actionTypes';

const apiMiddleware = ({ dispatch, getState }) => (next) => async ({
  type = '',
  payload = {},
}) => {
  if (type !== apiActionsTypes.API_REQUEST) {
    return next({ type, payload });
  }
  console.log(payload,'payloaddd');
  try {
    dispatch({ type: payload.onStart, payload: { loading: true } });
    const { data } = await axiosHelper(payload.httpOptions)[payload.method](
      payload.url,
      payload.data
    );
    console.log(data,'middleware');
    dispatch({ type: payload.onSuccess, payload: data });
  } catch (error) {
    console.log(error.message,'error');
    dispatch({
      type: payload.onFailure,
      payload: (error.response && error.response.data) || {
        errors: { message: error.message },
      },
    });
  }

  dispatch({ type: payload.onEnd, payload: { loading: false } });
  return getState();
};

export default apiMiddleware;
