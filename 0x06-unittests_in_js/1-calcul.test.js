const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

  describe('SUM', () => {
    it('should return 6 when type is SUM, a = 1.4, b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when type is SUM, a = 2.5, b = 2.4', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 2.4), 5);
    });

    it('should return 0 when type is SUM, a = -1.4, b = 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a = 1.4, b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when type is SUBTRACT, a = 5.5, b = 5.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 5.5), 0);
    });

    it('should return -2 when type is SUBTRACT, a = -1.4, b = 0.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 0.5), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a = 1.4, b = 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return 5.5 when type is DIVIDE, a = 10.5, b = 2.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.5, 2.2), 5.5);
    });

    it('should return Error when type is DIVIDE, a = 1.4, b = 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Error when type is DIVIDE, a = 1.4, b = 0.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });

  describe('INVALID TYPE', () => {
    it('should throw an error when an invalid type is used', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});
