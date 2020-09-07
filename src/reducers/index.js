import users from './user';
import productReducers from './product';
import landing from './landing';
import order from './order';
import adverts from './advert';
import announcementReducers from './announcement';
import newsRe from './news';
import feedback from './feedback';
import refund from './refund';

const {
  advertisement,
  search,
  announcement,
  externalAdvertisement,
  sidebar,
  bestProducts,
} = landing;
const { allAdverts, advert, deleteAdvertisement } = adverts;
const {
  createOrder,
  payment,
  clientOrders,
  allOrders,
  searchOrder,
  cancelOrder,
  deliverOrder,
} = order;
const { allUsers, user, userLogout, deleteUser } = users;
const { allNews, news, deleteNews } = newsRe;
const { deleteProduct, product } = productReducers;
const { announcements, deleteAnnouncement } = announcementReducers;

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
};
