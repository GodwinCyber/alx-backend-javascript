const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a = 1.4, b = 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when type is SUM, a = 2.5, b = 2.4', () => {
      expect(calculateNumber('SUM', 2.5, 2.4)).to.equal(5);
    });

    it('should return 0 when type is SUM, a = -1.4, b = 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a = 1.4, b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when type is SUBTRACT, a = 5.5, b = 5.5', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 5.5)).to.equal(0);
    });

    it('should return -2 when type is SUBTRACT, a = -1.4, b = 0.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 0.5)).to.equal(-2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a = 1.4, b = 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return 5.5 when type is DIVIDE, a = 10.5, b = 2.2', () => {
      expect(calculateNumber('DIVIDE', 10.5, 2.2)).to.equal(5.5);
    });

    it('should return Error when type is DIVIDE, a = 1.4, b = 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Error when type is DIVIDE, a = 1.4, b = 0.4', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  describe('INVALID TYPE', () => {
    it('should throw an error when an invalid type is used', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
