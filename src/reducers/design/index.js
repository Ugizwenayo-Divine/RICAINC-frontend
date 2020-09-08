import initialState from '../../store/initialState';
import addDesignReducer from './addDesignReducer';

const addDesign = (state = initialState, action) => {
    const newDesign = addDesignReducer(state, action);
  
    return newDesign || state;
  };

  export default {addDesign};