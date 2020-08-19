import { advertisementActionTypes, externalAdvertActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADVERTISEMENT_URL, EXTERNAL_ADVERTISEMENT_URL } from '../../helpers/backendURLs';

const internalAdvertisement =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: ADVERTISEMENT_URL,
        headers: { 'Content-Type': 'application/json'},
      },
      onStart: advertisementActionTypes.ADVERTISEMENT_START,
      onEnd: advertisementActionTypes.ADVERTISEMENT_END,
      onSuccess: advertisementActionTypes.ADVERTISEMENT_SUCCESS,
      onFailure: advertisementActionTypes.ADVERTISEMENT_FAILURE,
    })
  );
  const externalAdvertisement =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: EXTERNAL_ADVERTISEMENT_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: externalAdvertActionTypes.EXTERNAL_ADVERTISEMENT_START,
      onEnd: externalAdvertActionTypes.EXTERNAL_ADVERTISEMENT_END,
      onSuccess: externalAdvertActionTypes.EXTERNAL_ADVERTISEMENT_SUCCESS,
      onFailure: externalAdvertActionTypes.EXTERNAL_ADVERTISEMENT_FAILURE,
    })
  );

  export default {internalAdvertisement, externalAdvertisement}
