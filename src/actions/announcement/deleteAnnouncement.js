import { announcementActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DELETE_ANNOUNCEMENT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const deleteAnnouncement = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_ANNOUNCEMENT_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: announcementActionTypes.DELETE_ANNOUNCEMENT_START,
      onEnd: announcementActionTypes.DELETE_ANNOUNCEMENT_END,
      onSuccess: announcementActionTypes.DELETE_ANNOUNCEMENT_SUCCESS,
      onFailure: announcementActionTypes.DELETE_ANNOUNCEMENT_FAILURE,
    })
  );
export default {deleteAnnouncement};