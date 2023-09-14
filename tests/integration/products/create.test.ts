import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import { Product } from '../../../src/types/Product';
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return status 201 and the created product', async function () {
    const product = productsMock.validateProduct;
    const response = ProductModel.build(productsMock.valideResponse);
    sinon.stub(ProductModel, 'create').resolves(response);
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(201);
  });
});

