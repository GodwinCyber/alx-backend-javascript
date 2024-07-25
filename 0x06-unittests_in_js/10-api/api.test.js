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

describe('/available_payments', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 for /available_payments', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods object', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('/login', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return the correct welcome message with username', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };

    request.post(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
