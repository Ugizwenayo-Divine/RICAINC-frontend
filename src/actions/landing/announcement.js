import { announcementActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ANNOUNCEMENT_URL } from '../../helpers/backendURLs';

const getAnnouncements =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${ANNOUNCEMENT_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: announcementActionTypes.ANNOUNCEMENT_START,
      onEnd: announcementActionTypes.ANNOUNCEMENT_END,
      onSuccess: announcementActionTypes.ANNOUNCEMENT_SUCCESS,
      onFailure: announcementActionTypes.ANNOUNCEMENT_FAILURE,
    })
  );

  export default {getAnnouncements}
