import { advertisementActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_ADVERTISEMENTS_URL,GET_ADVERTISEMENT_URL,DELETE_ADVERTISEMENT_URL, UPDATE_ADVERTISEMENT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const getAllAdverts = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: ALL_ADVERTISEMENTS_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: advertisementActionTypes.DISPLAY_ADVERT_START,
      onEnd: advertisementActionTypes.DISPLAY_ADVERT_END,
      onSuccess: advertisementActionTypes.DISPLAY_ADVERT_SUCCESS,
      onFailure: advertisementActionTypes.DISPLAY_ADVERT_FAILURE,
    })
  );
  const getAdvertsType = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${GET_ADVERTISEMENT_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: advertisementActionTypes.DISPLAY_ADVERT_START,
      onEnd: advertisementActionTypes.DISPLAY_ADVERT_END,
      onSuccess: advertisementActionTypes.DISPLAY_ADVERT_SUCCESS,
      onFailure: advertisementActionTypes.DISPLAY_ADVERT_FAILURE,
    })
  );
  const deleteAdvert = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_ADVERTISEMENT_URL}/${data}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: advertisementActionTypes.DELETE_ADVERTISEMENT_START,
      onEnd: advertisementActionTypes.DELETE_ADVERTISEMENT_END,
      onSuccess: advertisementActionTypes.DELETE_ADVERTISEMENT_SUCCESS,
      onFailure: advertisementActionTypes.DELETE_ADVERTISEMENT_FAILURE,
    })
  );
  const updateAdvert = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_ADVERTISEMENT_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: advertisementActionTypes.UPDATE_ADVERTISEMENT_START,
      onEnd: advertisementActionTypes.UPDATE_ADVERTISEMENT_END,
      onSuccess: advertisementActionTypes.UPDATE_ADVERTISEMENT_SUCCESS,
      onFailure: advertisementActionTypes.UPDATE_ADVERTISEMENT_FAILURE,
    })
  );

  export default {getAllAdverts,getAdvertsType,deleteAdvert, updateAdvert};
