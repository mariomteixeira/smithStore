import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const findAll = async (): Promise<Order[]> => {
  const allOrders = await OrderModel.findAll();

  const orderMap = allOrders.map(async (order) => {
    const products = await ProductModel.findAll({
      where: {
        orderId: order.dataValues.id,
      },
    });

    const productIds = products.map((product) => product.dataValues.id);

    return {
      id: order.dataValues.id,
      productIds,
      userId: order.dataValues.userId,
    };
  });

  const orders = await Promise.all(orderMap);

  return orders;
};

export default {
  findAll, 
};