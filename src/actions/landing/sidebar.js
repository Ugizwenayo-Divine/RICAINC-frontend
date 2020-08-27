import { sidebarActionTypes, bestProductsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { SEARCH_ALL_URL, BEST_PRODUCT_URL } from '../../helpers/backendURLs';

  const displaySidebar =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${SEARCH_ALL_URL}`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: sidebarActionTypes.SIDEBAR_DISPLAY_START,
      onEnd: sidebarActionTypes.SIDEBAR_DISPLAY_END,
      onSuccess: sidebarActionTypes.SIDEBAR_DISPLAY_SUCCESS,
      onFailure: sidebarActionTypes.SIDEBAR_DISPLAY_FAILURE,
    })
  );
  const displayBestProducts =  () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      httpOptions: {
        URL: `${BEST_PRODUCT_URL}?type=best`,
        headers: { 'Content-Type': 'application/json' },
      },
      onStart: bestProductsActionTypes.BEST_PRODUCTS_START,
      onEnd: bestProductsActionTypes.BEST_PRODUCTS_END,
      onSuccess: bestProductsActionTypes.BEST_PRODUCTS_SUCCESS,
      onFailure: bestProductsActionTypes.BEST_PRODUCTS_FAILURE,
    })
  );

  export default {displaySidebar, displayBestProducts}
