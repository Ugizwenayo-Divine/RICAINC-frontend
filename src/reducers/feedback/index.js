import initialState from '../../store/initialState';
import newFeedbackReducer from './newFeedbackReducer';
import displayFeedbackReducer from './displayFeedbackReducer';
import deleteFeedbackReducer from './deleteFeedbackReducer';

const feedback = (state = initialState, action) => {
  const newFeedback = newFeedbackReducer(state, action);

  return newFeedback || state;
};

const displayFeedback = (state = initialState, action) => {
  const newFeedback = displayFeedbackReducer(state, action);

  return newFeedback || state;
};
const deleteFeedback = (state = initialState, action) => {
  const newFeedback = deleteFeedbackReducer(state, action);

  return newFeedback || state;
};

export default {feedback, displayFeedback,deleteFeedback};
