import user from './user';
import product from './product';
import landing from './landing';
import order from './order';
const {
  createOrder,
} = order;
const {
  advertisement,
  search,
  announcement,
  externalAdvertisement, 
  sidebar,
  bestProducts,
} = landing;

export default { user, search, advertisement, externalAdvertisement, announcement, sidebar, bestProducts, product, createOrder };
