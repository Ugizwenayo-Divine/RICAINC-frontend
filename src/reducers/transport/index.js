import initialState from '../../store/initialState';
import updateTransportReducer from './updateTransportReducer';
import displayTransportReducer from './displayTransportReducer';
import displaySectorReducer from './displaySectorReducer';

  const updateTransport = (state = initialState, action) => {
    const newTransport = updateTransportReducer(state, action);
  
    return newTransport || state;
  };
  const transport = (state = initialState, action) => {
    const newTransport = displayTransportReducer(state, action);
  
    return newTransport || state;
  };
  
  const sector = (state = initialState, action) => {
    const newTransport = displaySectorReducer(state, action);
  
    return newTransport || state;
  };
  
    export default { updateTransport, transport, sector};