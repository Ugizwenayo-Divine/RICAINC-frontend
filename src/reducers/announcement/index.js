import initialState from '../../store/initialState';
import newAnnouncementReducer from './newAnnouncementReducer';
import deleteAnnounceReducer from './deleteAnnounceReducer';
import updateAnnouncementReducer from './updateAnnouncementReducer';

const announcements = (state = initialState, action) => {
  const newAnnouncement = newAnnouncementReducer(state, action);

  return newAnnouncement || state;
};
const deleteAnnouncement = (state = initialState, action) => {
  const newAnnouncement = deleteAnnounceReducer(state, action);

  return newAnnouncement || state;
};
const updateAnnouncement = (state = initialState, action) => {
  const newAnnouncement = updateAnnouncementReducer(state, action);

  return newAnnouncement || state;
};
export default {announcements, deleteAnnouncement, updateAnnouncement};
