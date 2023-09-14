import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const create = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);
  const listProducts = await ProductModel.findByPk(newProduct.dataValues.id, {
    attributes: { exclude: ['orderId'] },
  });
  if (!listProducts) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Product not found' },
    };
  }
  return { 
    status: 'SUCCESSFUL',
    data: listProducts.dataValues,
  };
};

export default {
  create,
};
