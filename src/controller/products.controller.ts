import { Request, Response } from 'express';
import productsService from '../services/products.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;
  const product = await productsService.create({ name, price, orderId });
  return res.status(201).json(product.data);
};

export default {
  create,
};