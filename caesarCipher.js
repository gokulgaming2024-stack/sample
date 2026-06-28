// Helper function to shift a single character
function shiftCharacter(char, shift) {
  // Determine if uppercase or lowercase
  const isUpperCase = char === char.toUpperCase();
  const charCode = char.charCodeAt(0);

  // Base character codes
  const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

  // Calculate position in alphabet (0-25)
  const position = charCode - base;

  // Shift with wrapping
  const newPosition = (position + shift) % 26;

  // Handle negative shifts
  const normalizedPosition = newPosition < 0 ? newPosition + 26 : newPosition;

  // Convert back to character
  return String.fromCharCode(base + normalizedPosition);
}

export function caesarCipher(string, shift) {
  return string
    .split('')
    .map(char => {
      // Check if character is a letter
      if (/[a-zA-Z]/.test(char)) {
        return shiftCharacter(char, shift);
      }
      // Return non-alphabetical characters unchanged
      return char;
    })
    .join('');
}
