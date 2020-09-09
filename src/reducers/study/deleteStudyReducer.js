import {
    DELETE_STUDY_START,
    DELETE_STUDY_SUCCESS,
    DELETE_STUDY_FAILURE,
    DELETE_STUDY_END,
  } from '../../actionTypes/addStudyActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case DELETE_STUDY_START:
        return {
          ...state,
          loading: true,
          studyErrors: null,
          message: null,
        };
      case DELETE_STUDY_SUCCESS:
        window.location.replace('/displaystudies');
        return {
          ...state,
          loading: false,
          studyErrors: null,
          message: payload.message,
        };
      case DELETE_STUDY_FAILURE:
        return {
          ...state,
          loading: false,
          studyErrors: payload.error,
          message: null,
        };
      case DELETE_STUDY_END:
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
  