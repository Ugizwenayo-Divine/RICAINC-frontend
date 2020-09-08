import initialState from '../../store/initialState';
import addStudyReducer from './addStudyReducer';

const addStudy = (state = initialState, action) => {
    const newStudy = addStudyReducer(state, action);
  
    return newStudy || state;
  };

  export default {addStudy};