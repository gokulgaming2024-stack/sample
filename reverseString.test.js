import { reverseString } from '../src/reverseString';

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses another string', () => {
    expect(reverseString('world')).toBe('dlrow');
  });

  test('handles single character strings', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('handles strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('handles strings with special characters', () => {
    expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
  });

  test('handles palindromes', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('handles numbers in strings', () => {
    expect(reverseString('12345')).toBe('54321');
  });
});
