import { addDesignActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ADD_DESIGN_URL } from '../../helpers/backendURLs';

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
  export default {addDesign};
