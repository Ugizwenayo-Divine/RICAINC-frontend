import { addStudyActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_STUDY_URL, UPDATE_STUDY_URL, DELETE_STUDY_URL, DISPLAY_STUDY_URL } from '../../helpers/backendURLs';

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
  const updateStudy = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_STUDY_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addStudyActionTypes.UPDATE_STUDY_START,
      onEnd: addStudyActionTypes.UPDATE_STUDY_END,
      onSuccess: addStudyActionTypes.UPDATE_STUDY_SUCCESS,
      onFailure: addStudyActionTypes.UPDATE_STUDY_FAILURE,
    })
  );
  const deleteStudy = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_STUDY_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addStudyActionTypes.DELETE_STUDY_START,
      onEnd: addStudyActionTypes.DELETE_STUDY_END,
      onSuccess: addStudyActionTypes.DELETE_STUDY_SUCCESS,
      onFailure: addStudyActionTypes.DELETE_STUDY_FAILURE,
    })
  );
  const displayStudy = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: DISPLAY_STUDY_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addStudyActionTypes.DISPLAY_STUDY_START,
      onEnd: addStudyActionTypes.DISPLAY_STUDY_END,
      onSuccess: addStudyActionTypes.DISPLAY_STUDY_SUCCESS,
      onFailure: addStudyActionTypes.DISPLAY_STUDY_FAILURE,
    })
  );
  export default {addStudy, updateStudy, deleteStudy, displayStudy};
