import initialState from '../../store/initialState';
import newAdvertReducer from './newAdvertReducer';
import allAdvertsReducer from './displayAllAdverts';
import deleteAdvertReducer from './deleteAdvertReducer';

const advert = (state = initialState, action) => {
  const newAdvert = newAdvertReducer(state, action);

  return newAdvert || state;
};
const allAdverts = (state = initialState, action) => {
  const newAdvert = allAdvertsReducer(state, action);

  return newAdvert || state;
};
const deleteAdvertisement = (state = initialState, action) => {
  const newAdvert = deleteAdvertReducer(state, action);

  return newAdvert || state;
};
export default{advert, allAdverts, deleteAdvertisement};
