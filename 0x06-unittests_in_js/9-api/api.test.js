const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 for /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return correct 404 message when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(body).to.equal('Cannot GET /cart/hello');
      done();
    });
  });
});
