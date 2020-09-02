import initialState from '../../store/initialState';
import orderReducer from './createOrderReducer';
import paymentReducer from './orderPaymentReducer';
import clientOrdersReducer from './clientOrdersReducer';

const createOrder = (state = initialState, action) => {
  const order = orderReducer(state, action);

  return order || state;
};
const payment = (state = initialState, action) => {
  const order = paymentReducer(state, action);

  return order || state;
};
const clientOrders = (state = initialState, action) => {
  const order = clientOrdersReducer(state, action);

  return order || state;
};

export default {createOrder, payment, clientOrders};
