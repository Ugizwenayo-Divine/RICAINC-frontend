import {
    UPDATE_ANNOUNCEMENT_END,
    UPDATE_ANNOUNCEMENT_SUCCESS,
    UPDATE_ANNOUNCEMENT_FAILURE,
    UPDATE_ANNOUNCEMENT_START,
  } from '../../actionTypes/announcementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_ANNOUNCEMENT_START:
        return {
          ...state,
          loading: true,
          announcementErrors: null,
          message: null,
        };
      case UPDATE_ANNOUNCEMENT_SUCCESS:
        window.location.replace('/displayannouncement');
        return {
          ...state,
          loading: false,
          announcementErrors: null,
          message: payload.message,
        };
      case UPDATE_ANNOUNCEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          announcementErrors: payload.error,
          message: null,
        };
      case UPDATE_ANNOUNCEMENT_END:
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
  