import order from './orderAction';
import orderPayment from'./orderPaymentAction';

const {
    addOrder,
    getClientOrders
} = order;

export { addOrder, orderPayment, getClientOrders };