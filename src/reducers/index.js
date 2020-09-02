import user from './user';
import product from './product';
import landing from './landing';
import order from './order';
import advert from './advert';
import announcements from './announcement';
import news from './news';
const { createOrder } = order;
const {
  advertisement,
  search,
  announcement,
  externalAdvertisement,
  sidebar,
  bestProducts,
} = landing;

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
};
