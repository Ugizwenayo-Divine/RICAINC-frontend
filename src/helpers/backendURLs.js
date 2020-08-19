const BASE_URL = 'https://rica-inc.herokuapp.com/api';
const LOCAL_URL = 'http://localhost:3000/api';
const SIGNUP_URL = `${BASE_URL}/auth/signup`;
const LOGIN_URL = `${BASE_URL}/auth/login`;
const NEW_PRODUCT = `${BASE_URL}/product/add`;
const SEARCH_NAME_URL = `${BASE_URL}/product/any`;
const SEARCH_ALL_URL = `${BASE_URL}/product/available`;
const ADVERTISEMENT_URL = `${BASE_URL}/advertisement/internal`;
const EXTERNAL_ADVERTISEMENT_URL = `${BASE_URL}/advertisement/external`;
const ANNOUNCEMENT_URL = `${BASE_URL}/announcement`;
const BEST_PRODUCT_URL = `${BASE_URL}/product/product-type`;

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
    NEW_PRODUCT
};
