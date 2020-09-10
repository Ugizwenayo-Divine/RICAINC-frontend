import {
    DELETE_ANNOUNCEMENT_END,
    DELETE_ANNOUNCEMENT_SUCCESS,
    DELETE_ANNOUNCEMENT_FAILURE,
    DELETE_ANNOUNCEMENT_START,
  } from '../../actionTypes/announcementActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_ANNOUNCEMENT_START:
        return {
          ...state,
          loading: true,
          announcementErrors: null,
          message: null,
        };
      case DELETE_ANNOUNCEMENT_SUCCESS:
        window.location.replace('/displayannouncement');
        return {
          ...state,
          loading: false,
          announcementErrors: null,
          message: payload.message,
        };
      case DELETE_ANNOUNCEMENT_FAILURE:
        return {
          ...state,
          loading: false,
          announcementErrors: payload.error,
          message: null,
        };
      case DELETE_ANNOUNCEMENT_END:
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
  