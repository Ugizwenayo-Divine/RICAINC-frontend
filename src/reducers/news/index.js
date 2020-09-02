import initialState from '../../store/initialState';
import newNewsRuducer from './newNewsReducer';

export default (state = initialState, action) => {
  const newNews = newNewsRuducer(state, action);

  return newNews || state;
};
