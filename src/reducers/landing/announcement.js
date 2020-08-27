import {
    ANNOUNCEMENT_END,
    ANNOUNCEMENT_FAILURE,
    ANNOUNCEMENT_START,
    ANNOUNCEMENT_SUCCESS,
  } from '../../actionTypes/announcementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ANNOUNCEMENT_START:
        return {
          ...state,
          loading: true,
          announcementErrors: null,
          message: null,
        };
      case ANNOUNCEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          announcementErrors: null,
          message: payload.message,
          announcements: payload.data,
        };
      case ANNOUNCEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          announcementErrors: payload.error,
          message: null,
        };
      case ANNOUNCEMENT_END:
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
  