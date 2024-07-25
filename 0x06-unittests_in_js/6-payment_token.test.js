const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
const { response } = require('express');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with correct data with success is true', (done) => {
        getPaymentTokenFromAPI(true)
          .then((data) => {
            expect(response).to.have,property('data');
            expect(response.data).to.equal('Successful response from API');
            done();
          })
          .catch((error) => {
            done(error);
          });
    });
    it('should do nothing when is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined;
        done();
    });
});
