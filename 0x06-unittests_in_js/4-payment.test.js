const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
  it('should call Utils.calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
