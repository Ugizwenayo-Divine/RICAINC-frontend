import {
    ADD_STUDY_START,
    ADD_STUDY_SUCCESS,
    ADD_STUDY_FAILURE,
    ADD_STUDY_END,
  } from '../../actionTypes/addStudyActionTypes';
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case ADD_STUDY_START:
        return {
          ...state,
          loading: true,
          studyErrors: null,
          message: null,
        };
      case ADD_STUDY_SUCCESS:
        return {
          ...state,
          loading: false,
          studyErrors: null,
          message: payload.message,
        };
      case ADD_STUDY_FAILURE:
        return {
          ...state,
          loading: false,
          studyErrors: payload.error,
          message: null,
        };
      case ADD_STUDY_END:
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
  