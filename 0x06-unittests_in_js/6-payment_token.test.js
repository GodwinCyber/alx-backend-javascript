const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with correct data when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data');
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  }));

  it('should return a promise that resolves to undefined when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch((error) => {
        done(error);
      });
  }));
});
