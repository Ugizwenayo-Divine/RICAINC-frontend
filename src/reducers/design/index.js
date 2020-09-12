import initialState from '../../store/initialState';
import addDesignReducer from './addDesignReducer';
import deleteDesignReducer from './deleteDesignReducer';
import updateDesignReducer from './updateDesignReducer';
import displayDesignReducer from './allDesignReducer';
import fetchDesignsReducer from './fetchDesignsReducer';
import fetchSingleDesignReducer from './fetchSingleDesignReducer';

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

const designs = (state = initialState, action) => {
  const fetchDesigns = fetchDesignsReducer(state, action);
  return fetchDesigns || state;
};
const singleDesign = (state = initialState, action) => {
  const fetchSingleDesign = fetchSingleDesignReducer(state, action);
  return fetchSingleDesign || state;
};

  export default {addDesign, updateDesign, deleteDesign, displayDesign, designs, singleDesign };
