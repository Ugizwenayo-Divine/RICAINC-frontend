import { transportActionTypes} from '../../actionTypes';
import { apiAction } from '../../helpers';
import { TRANSPORT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
  const updateTransport = (name,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${TRANSPORT_URL}/${name}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: transportActionTypes.UPDATE_TRANSPORT_START,
      onEnd: transportActionTypes.UPDATE_TRANSPORT_END,
      onSuccess: transportActionTypes.UPDATE_TRANSPORT_SUCCESS,
      onFailure: transportActionTypes.UPDATE_TRANSPORT_FAILURE,
    })
  );
  const displayTransport = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: TRANSPORT_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: transportActionTypes.DISPLAY_TRANSPORT_START,
      onEnd: transportActionTypes.DISPLAY_TRANSPORT_END,
      onSuccess: transportActionTypes.DISPLAY_TRANSPORT_SUCCESS,
      onFailure: transportActionTypes.DISPLAY_TRANSPORT_FAILURE,
    })
  );
  export default {updateTransport, displayTransport};
