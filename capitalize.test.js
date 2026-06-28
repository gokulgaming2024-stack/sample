import { capitalize } from '../src/capitalize';

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns a string with capital first letter', () => {
    expect(capitalize('world')).toBe('World');
  });

  test('handles already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('handles single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles strings with multiple words', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('handles strings starting with numbers', () => {
    expect(capitalize('123abc')).toBe('123abc');
  });
});
