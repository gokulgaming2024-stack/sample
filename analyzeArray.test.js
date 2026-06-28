import { analyzeArray } from '../src/analyzeArray';

describe('analyzeArray', () => {
  test('returns object with correct properties', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toHaveProperty('average');
    expect(result).toHaveProperty('min');
    expect(result).toHaveProperty('max');
    expect(result).toHaveProperty('length');
  });

  test('calculates average correctly', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.average).toBe(4);
  });

  test('finds minimum value', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.min).toBe(1);
  });

  test('finds maximum value', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.max).toBe(8);
  });

  test('calculates length correctly', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.length).toBe(6);
  });

  test('works with single element array', () => {
    const result = analyzeArray([5]);
    expect(result.average).toBe(5);
    expect(result.min).toBe(5);
    expect(result.max).toBe(5);
    expect(result.length).toBe(1);
  });

  test('works with negative numbers', () => {
    const result = analyzeArray([-1, -8, -3, -4, -2, -6]);
    expect(result.average).toBe(-4);
    expect(result.min).toBe(-8);
    expect(result.max).toBe(-1);
    expect(result.length).toBe(6);
  });

  test('works with mixed positive and negative', () => {
    const result = analyzeArray([10, -5, 0, 3, -2]);
    expect(result.average).toBe(1.2);
    expect(result.min).toBe(-5);
    expect(result.max).toBe(10);
    expect(result.length).toBe(5);
  });

  test('works with decimal numbers', () => {
    const result = analyzeArray([1.5, 2.5, 3.5, 4.5]);
    expect(result.average).toBe(3);
    expect(result.min).toBe(1.5);
    expect(result.max).toBe(4.5);
    expect(result.length).toBe(4);
  });

  test('works with duplicates', () => {
    const result = analyzeArray([2, 2, 2, 2]);
    expect(result.average).toBe(2);
    expect(result.min).toBe(2);
    expect(result.max).toBe(2);
    expect(result.length).toBe(4);
  });

  test('works with unsorted array', () => {
    const result = analyzeArray([9, 1, 5, 3, 8, 2]);
    expect(result.average).toBe((9 + 1 + 5 + 3 + 8 + 2) / 6);
    expect(result.min).toBe(1);
    expect(result.max).toBe(9);
    expect(result.length).toBe(6);
  });
});
