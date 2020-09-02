import { newsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { NEW_NEWS } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: NEW_NEWS,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: newsActionTypes.CREATE_NEWS_REQUEST,
      onEnd: newsActionTypes.CREATE_NEWS_END,
      onSuccess: newsActionTypes.CREATE_NEWS_SUCCESS,
      onFailure: newsActionTypes.CREATE_NEWS_FAILURE,
    })
  );
