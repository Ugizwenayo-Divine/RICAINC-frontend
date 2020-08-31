import {
  CREATE_ADVERT_REQUEST,
  CREATE_ADVERT_SUCCESS,
  CREATE_ADVERT_FAILURE,
  CREATE_ADVERT_END,
} from '../../actionTypes/advertisementActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_ADVERT_REQUEST:
      return {
        ...state,
        loading: true,
        advertisementErrors: null,
        message: null,
      };
    case CREATE_ADVERT_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisementErrors: null,
        message: payload.message,
      };
    case CREATE_ADVERT_FAILURE:
      return {
        ...state,
        loading: false,
        advertisementErrors: payload.error,
        message: null,
      };
    case CREATE_ADVERT_END:
      return {
        ...state,
        loading: false,
        advertisementErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
