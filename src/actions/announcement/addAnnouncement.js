import { announcementActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { NEW_ANNOUNCEMENT } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: NEW_ANNOUNCEMENT,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: announcementActionTypes.CREATE_ANNOUNCEMENT_REQUEST,
      onEnd: announcementActionTypes.CREATE_ANNOUNCEMENT_END,
      onSuccess: announcementActionTypes.CREATE_ANNOUNCEMENT_SUCCESS,
      onFailure: announcementActionTypes.CREATE_ANNOUNCEMENT_FAILURE,
    })
  );
