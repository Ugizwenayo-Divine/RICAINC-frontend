import users from './user';
import productReducers from './product';
import landing from './landing';
import order from './order';
import adverts from './advert';
import announcementReducers from './announcement';
import newsRe from './news';
import feedbackReducers from './feedback';
import refundReducers from './refund';
import designReducers from './design';
import studyReducers from './study';

const {
  advertisement,
  search,
  announcement,
  externalAdvertisement,
  sidebar,
  bestProducts,
} = landing;
const { allAdverts, advert, deleteAdvertisement,updateAdvertisement, } = adverts;
const { 
  createOrder,
  payment,
  clientOrders,
  allOrders,
  searchOrder,
  cancelOrder,
  deliverOrder,
} = order;
const { allUsers, user, userLogout, deleteUser,updateUser, } = users;
const { allNews, news, deleteNews,updateNews, } = newsRe;
const { deleteProduct, product, updateProduct,bestProduct,addQty, } = productReducers;
const { announcements, deleteAnnouncement,updateAnnouncement, } = announcementReducers;
const {
  clientRefund,
  refund,
  displayRefund,
  refundStatus,
}= refundReducers;
const {
  displayFeedback,
  feedback,
  deleteFeedback,
} = feedbackReducers;
const {
  addDesign,
} = designReducers;
const {
  addStudy,
} = studyReducers;

export default {
  user,
  search,
  advertisement,
  advert,
  externalAdvertisement,
  announcement,
  sidebar,
  bestProducts,
  product,
  createOrder,
  announcements,
  news,
  payment,
  clientOrders,
  allOrders,
  searchOrder,
  allAdverts,
  allUsers,
  allNews,
  cancelOrder,
  userLogout,
  deleteUser,
  deleteProduct,
  deleteNews,
  deleteAnnouncement,
  deleteAdvertisement,
  deliverOrder,
  feedback,
  refund,
  updateUser,
  updateProduct,
  updateAdvertisement,
  updateAnnouncement,
  updateNews,
  bestProduct,
  addQty,
  clientRefund,
  displayFeedback,
  displayRefund,
  deleteFeedback,
  refundStatus,
  addStudy,
  addDesign
};
