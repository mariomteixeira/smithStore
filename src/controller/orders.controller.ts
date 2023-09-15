import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const findAll = async (req: Request, res: Response): Promise<void> => {
  const orders = await ordersService.findAll();
  res.status(200).json(orders);
};

export default {
  findAll,
};
