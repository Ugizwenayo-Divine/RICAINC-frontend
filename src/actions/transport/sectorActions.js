import { transportActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { TRANSPORT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

const getAllSectors = () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${TRANSPORT_URL}/sector`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: transportActionTypes.SECTOR_DISPLAY_START,
      onEnd: transportActionTypes.SECTOR_DISPLAY_END,
      onSuccess: transportActionTypes.SECTOR_DISPLAY_SUCCESS,
      onFailure: transportActionTypes.SECTOR_DISPLAY_FAILURE,
    })
  );

  const getAllByDistrict = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: `${TRANSPORT_URL}/sector/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: transportActionTypes.SECTOR_DISPLAY_START,
      onEnd: transportActionTypes.SECTOR_DISPLAY_END,
      onSuccess: transportActionTypes.SECTOR_DISPLAY_SUCCESS,
      onFailure: transportActionTypes.SECTOR_DISPLAY_FAILURE,
    })
  );
  export default { getAllSectors, getAllByDistrict};