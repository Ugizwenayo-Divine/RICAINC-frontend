import {
    DISPLAY_STUDY_START,
    DISPLAY_STUDY_SUCCESS,
    DISPLAY_STUDY_FAILURE,
    DISPLAY_STUDY_END,
  } from '../../actionTypes/addStudyActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_STUDY_START:
        return {
          ...state,
          loading: true,
          studyErrors: null,
          message: null,
        };
      case DISPLAY_STUDY_SUCCESS:
        return {
          ...state,
          loading: false,
          studyErrors: null,
          message: payload.message,
          data:payload.data
        };
      case DISPLAY_STUDY_FAILURE:
        return {
          ...state,
          loading: false,
          studyErrors: payload.error,
          message: null,
        };
      case DISPLAY_STUDY_END:
        return {
          ...state,
          loading: false,
          studyErrors: null,
          message: null,
        };
  
      default:
        return null;
    }
  };
  export default reducer;
  