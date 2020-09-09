import {
    UPDATE_STUDY_START,
    UPDATE_STUDY_SUCCESS,
    UPDATE_STUDY_FAILURE,
    UPDATE_STUDY_END,
  } from '../../actionTypes/addStudyActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case UPDATE_STUDY_START:
        return {
          ...state,
          loading: true,
          studyErrors: null,
          message: null,
        };
      case UPDATE_STUDY_SUCCESS:
        window.location.replace('/displaystudies');
        return {
          ...state,
          loading: false,
          studyErrors: null,
          message: payload.message,
        };
      case UPDATE_STUDY_FAILURE:
        return {
          ...state,
          loading: false,
          studyErrors: payload.error,
          message: null,
        };
      case UPDATE_STUDY_END:
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
  