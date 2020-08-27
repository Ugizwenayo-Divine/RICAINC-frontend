import initialState from '../../store/initialState';
import searchReducer from './searchReducer';
import advertisementReducer from './advertisement';
import externalAdvertisementReducer from './externalAdvertisement';
import announcementReducer from './announcement';
import sidebarReducer from './sidebar';
import bestProductsReducer from './bestProducts';

const search = (state = initialState, action) => {
  const search = searchReducer(state, action);

  return search || state;
};

const advertisement = (state = initialState, action) => {
  const advertisement = advertisementReducer(state, action);

  return advertisement || state;
};
const externalAdvertisement = (state = initialState, action) => {
  const externalAdvertisement = externalAdvertisementReducer(state, action);

  return externalAdvertisement || state;
};
const announcement = (state = initialState, action) => {
  const announcement = announcementReducer(state, action);

  return announcement || state;
};
const sidebar = (state = initialState, action) => {
  const search = sidebarReducer(state, action);

  return search || state;
};
const bestProducts = (state = initialState, action) => {
  const bestProducts = bestProductsReducer(state, action);

  return bestProducts || state;
};
 export default {search, advertisement, externalAdvertisement, announcement, sidebar, bestProducts};