import { caesarCipher } from '../src/caesarCipher';

describe('caesarCipher', () => {
  test('shifts letters by shift amount', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('works with shift of 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case - lowercase', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
  });

  test('preserves case - uppercase', () => {
    expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
  });

  test('preserves case - mixed', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('preserves punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('preserves spaces', () => {
    expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
  });

  test('preserves numbers and special characters', () => {
    expect(caesarCipher('Hello123!@#', 3)).toBe('Khoor123!@#');
  });

  test('handles shift of 0', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
  });

  test('handles large shift values', () => {
    expect(caesarCipher('abc', 26)).toBe('abc');
  });

  test('handles shift values greater than 26', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd');
  });

  test('handles negative shift values', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc');
  });

  test('handles empty string', () => {
    expect(caesarCipher('', 3)).toBe('');
  });

  test('complex example with all elements', () => {
    expect(caesarCipher('The quick brown fox jumps over the lazy dog!', 5))
      .toBe('Ymj vznhp gsvbm ksd ozrux yjwd ymj ozab iye!');
  });
});
