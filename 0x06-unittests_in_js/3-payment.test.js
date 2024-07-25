const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call the Utils.calculateNumber with the correct argument', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
    it('should log the correct total', () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.false;
        consoleLogSpy.restore();
    });
});