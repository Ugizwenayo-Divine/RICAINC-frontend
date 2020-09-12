import { DesignsAtionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DESIGNS } from '../../helpers/backendURLs';

export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `${DESIGNS}/${id}`,
      onStart: DesignsAtionTypes.FETCH_SPECIFIC_DESIGN_START,
      onEnd: DesignsAtionTypes.FETCH_SPECIFIC_DESIGN_END,
      onSuccess: DesignsAtionTypes.FETCH_SPECIFIC_DESIGN_SUCCESS,
      onFailure: DesignsAtionTypes.FETCH_SPECIFIC_DESIGN_FAILURE,
    })
  );
