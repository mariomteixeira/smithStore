import { ServiceResponse, ServiceResponseError } from '../types/ServiceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const validateName = (name: unknown): ServiceResponseError | undefined => {
  if (!name) {
    return {
      status: 'INVALID_DATA',
      data: { message: '"name" is required' },
    };
  }
  if (typeof name !== 'string') {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"name" must be a string' },
    };
  }
  if (name.length <= 2) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"name" length must be at least 3 characters long' },
    };
  }
};

const validatePrice = (price: unknown): ServiceResponseError | undefined => {
  if (!price) {
    return {
      status: 'INVALID_DATA',
      data: { message: '"price" is required' },
    };
  }
  if (typeof price !== 'string') {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"price" must be a string' },
    };
  }
  if (price.length <= 2) {
    return {
      status: 'BAD_REQUEST',
      data: { message: '"price" length must be at least 3 characters long' },
    };
  }
};

const validateNameandPrice = ({ name, price }:
ProductInputtableTypes): ServiceResponse<Product> | null => {
  const nameError = validateName(name);
  if (nameError) {
    return nameError;
  }
  const priceError = validatePrice(price);
  if (priceError) {
    return priceError;
  }
  return null;
};

const create = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const validationError = validateNameandPrice(product);
  if (validationError) {
    return validationError;
  }
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

async function findAll(): Promise<Product[]> {
  const listProducts = await ProductModel.findAll();
  return listProducts.map((product) => product.toJSON());
}

export default {
  create,
  findAll,
};
