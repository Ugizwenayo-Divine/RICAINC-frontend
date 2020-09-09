import initialState from '../../store/initialState';
import addStudyReducer from './addStudyReducer';
import deleteStudyReducer from './deleteStudyReducer';
import updateStudyReducer from './updateStudyReducer';
import displayStudyReducer from './allStudyReducer';

const addStudy = (state = initialState, action) => {
    const newStudy = addStudyReducer(state, action);
  
    return newStudy || state;
  };
  const deleteStudy = (state = initialState, action) => {
    const newStudy = deleteStudyReducer(state, action);
  
    return newStudy || state;
  };
  const updateStudy = (state = initialState, action) => {
    const newStudy = updateStudyReducer(state, action);
  
    return newStudy || state;
  };
  const displayStudy = (state = initialState, action) => {
    const newStudy = displayStudyReducer(state, action);
  
    return newStudy || state;
  };
  
    export default {addStudy, updateStudy, deleteStudy, displayStudy};