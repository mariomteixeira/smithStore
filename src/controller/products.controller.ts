import { Request, Response } from 'express';
import productsService from '../services/products.service';
import statusHTTP from './httpsStatus';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { status, data } = await productsService.create(req.body);
  if (status !== 'SUCCESSFUL') {
    return res.status(statusHTTP(status)).json(data);
  }
  return res.status(201).json(data);
};
const findAll = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.findAll();
  return res.status(200).json(products);
};

export default {
  create,
  findAll,
};