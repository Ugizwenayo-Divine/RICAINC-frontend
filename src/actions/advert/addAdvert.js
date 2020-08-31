import { advertisementActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { NEW_ADVERT } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: NEW_ADVERT,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: advertisementActionTypes.CREATE_ADVERT_REQUEST,
      onEnd: advertisementActionTypes.CREATE_ADVERT_END,
      onSuccess: advertisementActionTypes.CREATE_ADVERT_SUCCESS,
      onFailure: advertisementActionTypes.CREATE_ADVERT_FAILURE,
    })
  );
