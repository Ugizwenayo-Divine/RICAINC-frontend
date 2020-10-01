import initialState from '../../store/initialState';
import createBonusReducer from './createBonus';
import displayBonusReducer from './displayBonus';
import deleteBonusReducer from './deleteBonus';
import allowedBonusReducer from './allowedBonus';

  const bonus = (state = initialState, action) => {
    const bonus = createBonusReducer(state, action);
  
    return bonus || state;
  };
  const displayBonus = (state = initialState, action) => {
    const bonus = displayBonusReducer(state, action);
  
    return bonus || state;
  };
  
  const deleteBonus = (state = initialState, action) => {
    const bonus = deleteBonusReducer(state, action);
  
    return bonus || state;
  };
  
  const allowedBonus = (state = initialState, action) => {
    const bonus = allowedBonusReducer(state, action);
  
    return bonus || state;
  };
  
    export default { bonus, displayBonus, deleteBonus, allowedBonus};