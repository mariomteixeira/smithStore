import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
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
  it('should return status 400 when name is not provided', async function () {
    const product = productsMock.withoutName;
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(400);
  });
  it('should return status 400 when price is not provided', async function () {
    const product = productsMock.withoutPrice;
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(400);
  });
  it('should return status 422 when name is not a string', async function () {
    const product = productsMock.withoutStringName;
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(422);
  });
  it('should return status 422 when price is not a string', async function () {
    const product = productsMock.withoutStringPrice;
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(422);
  });
  it('should return status 422 when name length is less than 3', async function () {
    const product = productsMock.nameLength;
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(422);
  });
  it('should return status 422 when price length is less than 3', async function () {
    const product = productsMock.priceLength;
    const httpResponse = await chai.request(app).post('/products').send(product);
    expect(httpResponse.status).to.equal(422);
  });
});

