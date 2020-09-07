import { newsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_NEWS_URL,DELETE_NEWS_URL,UPDATE_NEWS_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const getAllNews = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_NEWS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: newsActionTypes.DISPLAY_NEWS_REQUEST,
      onEnd: newsActionTypes.DISPLAY_NEWS_END,
      onSuccess: newsActionTypes.DISPLAY_NEWS_SUCCESS,
      onFailure: newsActionTypes.DISPLAY_NEWS_FAILURE,
    })
  );
  const deleteNews = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_NEWS_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: newsActionTypes.DELETE_NEWS_START,
      onEnd: newsActionTypes.DELETE_NEWS_END,
      onSuccess: newsActionTypes.DELETE_NEWS_SUCCESS,
      onFailure: newsActionTypes.DELETE_NEWS_FAILURE,
    })
  );
  const updateNews = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_NEWS_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: newsActionTypes.UPDATE_NEWS_START,
      onEnd: newsActionTypes.UPDATE_NEWS_END,
      onSuccess: newsActionTypes.UPDATE_NEWS_SUCCESS,
      onFailure: newsActionTypes.UPDATE_NEWS_FAILURE,
    })
  );
export default {getAllNews, deleteNews,updateNews};