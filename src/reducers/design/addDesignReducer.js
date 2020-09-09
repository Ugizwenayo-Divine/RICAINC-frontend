import {
  ADD_DESIGN_START,
  ADD_DESIGN_SUCCESS,
  ADD_DESIGN_FAILURE,
  ADD_DESIGN_END,
} from '../../actionTypes/addDesignActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_DESIGN_START:
      return {
        ...state,
        loading: true,
        designErrors: null,
        message: null,
      };
    case ADD_DESIGN_SUCCESS:
      window.location.replace('/displaydesign');
      return {
        ...state,
        loading: false,
        designErrors: null,
        message: payload.message,
      };
    case ADD_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        designErrors: payload.error,
        message: null,
      };
    case ADD_DESIGN_END:
      return {
        ...state,
        loading: false,
        designErrors: null,
        message: null,
      };

    default:
      return null;
  }
};
export default reducer;
