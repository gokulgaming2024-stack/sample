import calculator from '../src/calculator';

describe('calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('adds zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('adds decimals', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts resulting in negative', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('subtracts with negative number', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('subtracts zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('subtracts decimals', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiplies with negative number', () => {
      expect(calculator.multiply(3, -4)).toBe(-12);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('multiplies decimals', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides with negative number', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('divides two negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('divides resulting in decimal', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    test('dividing by zero returns Infinity', () => {
      expect(calculator.divide(5, 0)).toBe(Infinity);
    });

    test('divides decimals', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });
  });
});
