import initialState from '../../store/initialState';
import newAnnouncementReducer from './newAnnouncementReducer';

export default (state = initialState, action) => {
  const newAnnouncement = newAnnouncementReducer(state, action);

  return newAnnouncement || state;
};
