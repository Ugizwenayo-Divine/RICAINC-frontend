import initialState from '../../store/initialState';
import newFeedbackReducer from './newFeedbackReducer';

export default (state = initialState, action) => {
  const newFeedback = newFeedbackReducer(state, action);

  return newFeedback || state;
};
