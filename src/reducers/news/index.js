import initialState from '../../store/initialState';
import newNewsRuducer from './newNewsReducer';
import allNewsReducer from './allNewsReducer';
import deleteNewsReducer from './deleteNewsReducer';
import updateNewsReducer from './updateNewsReducer';

const news = (state = initialState, action) => {
  const newNews = newNewsRuducer(state, action);

  return newNews || state;
};
const allNews = (state = initialState, action) => {
  const newNews = allNewsReducer(state, action);

  return newNews || state;
};
const deleteNews = (state = initialState, action) => {
  const newNews = deleteNewsReducer(state, action);

  return newNews || state;
};
const updateNews = (state = initialState, action) => {
  const newNews = updateNewsReducer(state, action);

  return newNews || state;
};
export default {news, allNews, deleteNews, updateNews};