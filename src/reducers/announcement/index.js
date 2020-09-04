import initialState from '../../store/initialState';
import newAnnouncementReducer from './newAnnouncementReducer';
import deleteAnnounceReducer from './deleteAnnounceReducer';

const announcements = (state = initialState, action) => {
  const newAnnouncement = newAnnouncementReducer(state, action);

  return newAnnouncement || state;
};
const deleteAnnouncement = (state = initialState, action) => {
  const newAnnouncement = deleteAnnounceReducer(state, action);

  return newAnnouncement || state;
};
export default {announcements, deleteAnnouncement};
