import initialState from '../../store/initialState';
import addDesignReducer from './addDesignReducer';
import deleteDesignReducer from './deleteDesignReducer';
import updateDesignReducer from './updateDesignReducer';
import displayDesignReducer from './allDesignReducer';

const addDesign = (state = initialState, action) => {
    const newDesign = addDesignReducer(state, action);
  
    return newDesign || state;
};
const deleteDesign = (state = initialState, action) => {
  const newDesign = deleteDesignReducer(state, action);

  return newDesign || state;
};
const updateDesign = (state = initialState, action) => {
  const newDesign = updateDesignReducer(state, action);

  return newDesign || state;
};
const displayDesign = (state = initialState, action) => {
  const newDesign = displayDesignReducer(state, action);

  return newDesign || state;
};

  export default {addDesign, updateDesign, deleteDesign, displayDesign};