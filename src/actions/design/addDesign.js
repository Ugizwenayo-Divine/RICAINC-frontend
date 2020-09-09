import { addDesignActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_DESIGN_URL, UPDATE_DESIGN_URL, DELETE_DESIGN_URL, DISPLAY_DESIGN_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
const addDesign = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      httpOptions: {
        token,
        URL: ADD_DESIGN_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addDesignActionTypes.ADD_DESIGN_START,
      onEnd: addDesignActionTypes.ADD_DESIGN_END,
      onSuccess: addDesignActionTypes.ADD_DESIGN_SUCCESS,
      onFailure: addDesignActionTypes.ADD_DESIGN_FAILURE,
    })
  );
  const updateDesign = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'patch',
      httpOptions: {
        token,
        URL: `${UPDATE_DESIGN_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addDesignActionTypes.UPDATE_DESIGN_START,
      onEnd: addDesignActionTypes.UPDATE_DESIGN_END,
      onSuccess: addDesignActionTypes.UPDATE_DESIGN_SUCCESS,
      onFailure: addDesignActionTypes.UPDATE_DESIGN_FAILURE,
    })
  );
  const deleteDesign = (id,data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      httpOptions: {
        token,
        URL: `${DELETE_DESIGN_URL}/${id}`,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addDesignActionTypes.DELETE_DESIGN_START,
      onEnd: addDesignActionTypes.DELETE_DESIGN_END,
      onSuccess: addDesignActionTypes.DELETE_DESIGN_SUCCESS,
      onFailure: addDesignActionTypes.DELETE_DESIGN_FAILURE,
    })
  );
  const displayDesign = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        token,
        URL: DISPLAY_DESIGN_URL,
        headers: { 'Content-Type': 'application/json' },
      },
      data,
      onStart: addDesignActionTypes.DISPLAY_DESIGN_START,
      onEnd: addDesignActionTypes.DISPLAY_DESIGN_END,
      onSuccess: addDesignActionTypes.DISPLAY_DESIGN_SUCCESS,
      onFailure: addDesignActionTypes.DISPLAY_DESIGN_FAILURE,
    })
  );
  export default {addDesign, updateDesign, deleteDesign, displayDesign};
