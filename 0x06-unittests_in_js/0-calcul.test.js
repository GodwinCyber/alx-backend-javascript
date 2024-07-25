const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when a = 1 and b = 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a = 1.2 and b = 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when a = 1.5 and b = 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when a = 0 and b = 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -2 when a = -1.4 and b = -1.5', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.5), -2);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(1, -3.7), -3); // Corrected expected value from -2 to -3
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should return NaN when one or both parameters are NaN', () => {
    assert.strictEqual(Number.isNaN(calculateNumber(NaN, 3.7)), true);
    assert.strictEqual(Number.isNaN(calculateNumber(1.2, NaN)), true);
    assert.strictEqual(Number.isNaN(calculateNumber(NaN, NaN)), true);
  });
});
