const BASE_URL = 'https://eng.backend.ricainc.co.com/api';
const LOCAL_URL = 'http://localhost:3000/api';
const SIGNUP_URL = `${BASE_URL}/auth/signup`;
const LOGIN_URL = `${BASE_URL}/auth/login`;
const NEW_PRODUCT = `${BASE_URL}/product/add`;
const NEW_ADVERT = `${BASE_URL}/advertisement/add`;
const NEW_ANNOUNCEMENT = `${BASE_URL}/announcement/add`;
const NEW_NEWS = `${BASE_URL}/news/add`;
const NEW_FEEDBACK = `${BASE_URL}/feedback/add`;
const SEARCH_NAME_URL = `${BASE_URL}/product/any`;
const SEARCH_ALL_URL = `${BASE_URL}/product/available`;
const ADVERTISEMENT_URL = `${BASE_URL}/advertisement/internal`;
const EXTERNAL_ADVERTISEMENT_URL = `${BASE_URL}/advertisement/external`;
const ANNOUNCEMENT_URL = `${BASE_URL}/announcement`;
const BEST_PRODUCT_URL = `${BASE_URL}/product/product-type`;
const ORDER_URL = `${BASE_URL}/orders/add`;
const ORDER_PAYMENT_URL = `${BASE_URL}/orders/pay`;
const NEW_REFUND = `${BASE_URL}/refund/add`;
const CLIENT_ORDERS_URL = `${BASE_URL}/orders/client-orders`;
const ALL_ORDERS_URL = `${BASE_URL}/orders`;
const SEARCH_ORDER_URL = `${BASE_URL}/orders/status-based`;
const ALL_ADVERTISEMENTS_URL = `${BASE_URL}/advertisement`;
const GET_ADVERTISEMENT_URL = `${BASE_URL}/advertisement`;
const ALL_USERS_URL = `${BASE_URL}/auth/all`;
const ALL_NEWS_URL = `${BASE_URL}/news`;
const CANCEL_ORDER_URL = `${BASE_URL}/orders/cancel`;
const USER_LOGOUT_URL = `${BASE_URL}/auth/logout`;
const DELETE_USER_URL = `${BASE_URL}/auth/delete-user`;
const DELETE_PRODUCT_URL = `${BASE_URL}/product`;
const DELETE_NEWS_URL = `${BASE_URL}/news`;
const DELETE_ANNOUNCEMENT_URL = `${BASE_URL}/announcement`;
const DELETE_ADVERTISEMENT_URL = `${BASE_URL}/advertisement`;
const DELIVER_ORDER_URL = `${BASE_URL}/orders/delivered`;
const UPDATE_USER_URL = `${BASE_URL}/auth/update-user`;
const UPDATE_PRODUCT_URL = `${BASE_URL}/product`;
const UPDATE_ADVERTISEMENT_URL = `${BASE_URL}/advertisement`;
const UPDATE_ANNOUNCEMENT_URL = `${BASE_URL}/announcement`;
const UPDATE_NEWS_URL = `${BASE_URL}/news`;
const ADD_REMOVE_BEST_PRODUCT_URL = `${BASE_URL}/product/best`;
const ADD_QTY_URL = `${BASE_URL}/product/add-quantity`;
const DISPLAY_PRODUCTS = `${BASE_URL}/product`;
const CLIENT_REFUND_URL = `${BASE_URL}/refund/customer`;
const DISPLAY_REFUNDS_URL = `${BASE_URL}/refund`;
const DISPLAY_FEEDBACKS_URL = `${BASE_URL}/feedback`;
const DELETE_FEEDBACK_URL = `${BASE_URL}/feedback`;
const REFUND_STATUS_URL = `${BASE_URL}/refund/status`;
const ADD_DESIGN_URL = `${BASE_URL}/design/add`;
const ADD_STUDY_URL = `${BASE_URL}/study/add`;
const DELETE_DESIGN_URL = `${BASE_URL}/design`;
const UPDATE_DESIGN_URL = `${BASE_URL}/design`;
const DISPLAY_DESIGN_URL = `${BASE_URL}/design`;
const DELETE_STUDY_URL = `${BASE_URL}/study`;
const UPDATE_STUDY_URL = `${BASE_URL}/study`;
const DISPLAY_STUDY_URL = `${BASE_URL}/study`;
const DESIGNS = `${BASE_URL}/design`;
const TRANSPORT_URL = `${BASE_URL}/location`;
const ADD_BONUS_URL = `${BASE_URL}/bonus/add`;
const BONUS_URL = `${BASE_URL}/bonus`;
const CHECK_BONUS_URL = `${BASE_URL}/orders/allowed-bonus`;

export {
  BASE_URL,
  LOCAL_URL,
  SIGNUP_URL,
  SEARCH_NAME_URL,
  SEARCH_ALL_URL,
  ADVERTISEMENT_URL,
  LOGIN_URL,
  ANNOUNCEMENT_URL,
  EXTERNAL_ADVERTISEMENT_URL,
  BEST_PRODUCT_URL,
  NEW_PRODUCT,
  ORDER_URL,
  NEW_ADVERT,
  NEW_ANNOUNCEMENT,
  NEW_NEWS,
  ORDER_PAYMENT_URL,
  CLIENT_ORDERS_URL,
  ALL_ORDERS_URL,
  SEARCH_ORDER_URL,
  ALL_ADVERTISEMENTS_URL,
  GET_ADVERTISEMENT_URL,
  ALL_USERS_URL,
  ALL_NEWS_URL,
  CANCEL_ORDER_URL,
  USER_LOGOUT_URL,
  DELETE_USER_URL,
  DELETE_ADVERTISEMENT_URL,
  DELETE_ANNOUNCEMENT_URL,
  DELETE_NEWS_URL,
  DELETE_PRODUCT_URL,
  DELIVER_ORDER_URL,
  NEW_FEEDBACK,
  NEW_REFUND,
  UPDATE_USER_URL,
  UPDATE_PRODUCT_URL,
  UPDATE_ADVERTISEMENT_URL,
  UPDATE_ANNOUNCEMENT_URL,
  UPDATE_NEWS_URL,
  ADD_REMOVE_BEST_PRODUCT_URL,
  ADD_QTY_URL,
  DISPLAY_PRODUCTS,
  CLIENT_REFUND_URL,
  DISPLAY_FEEDBACKS_URL,
  DISPLAY_REFUNDS_URL,
  DELETE_FEEDBACK_URL,
  REFUND_STATUS_URL,
  ADD_DESIGN_URL,
  ADD_STUDY_URL,
  DELETE_DESIGN_URL,
  DELETE_STUDY_URL,
  UPDATE_DESIGN_URL,
  UPDATE_STUDY_URL,
  DISPLAY_DESIGN_URL,
  DISPLAY_STUDY_URL,
  DESIGNS,
  TRANSPORT_URL,
  ADD_BONUS_URL,
  BONUS_URL,
  CHECK_BONUS_URL,
};
