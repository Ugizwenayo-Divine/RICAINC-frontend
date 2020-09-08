import { DesignsAtionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { DESIGNS } from '../../helpers/backendURLs';

export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: DESIGNS,
      onStart: DesignsAtionTypes.FETCH_DESIGN_START,
      onEnd: DesignsAtionTypes.FETCH_DESIGN_END,
      onSuccess: DesignsAtionTypes.FETCH_DESIGN_SUCCESS,
      onFailure: DesignsAtionTypes.FETCH_DESIGN_FAILURE,
    })
  );
