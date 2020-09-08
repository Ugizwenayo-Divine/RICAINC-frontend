import { addStudyActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_STUDY_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const addStudy = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ADD_STUDY_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addStudyActionTypes.ADD_STUDY_START,
      onEnd: addStudyActionTypes.ADD_STUDY_END,
      onSuccess: addStudyActionTypes.ADD_STUDY_SUCCESS,
      onFailure: addStudyActionTypes.ADD_STUDY_FAILURE,
    })
  );
  export default {addStudy};
