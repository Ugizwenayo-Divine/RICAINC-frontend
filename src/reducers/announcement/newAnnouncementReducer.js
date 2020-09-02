import {
  CREATE_ANNOUNCEMENT_REQUEST,
  CREATE_ANNOUNCEMENT_SUCCESS,
  CREATE_ANNOUNCEMENT_FAILURE,
  CREATE_ANNOUNCEMENT_END,
} from '../../actionTypes/announcementActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_ANNOUNCEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        announcementErrors: null,
        message: null,
      };
    case CREATE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        announcementErrors: null,
        message: payload.message,
      };
    case CREATE_ANNOUNCEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        announcementErrors: payload.error,
        message: null,
      };
    case CREATE_ANNOUNCEMENT_END:
      return {
        ...state,
        loading: false,
        announcementErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
