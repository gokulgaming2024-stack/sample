# Testing Practice

A comprehensive Jest testing project demonstrating TDD (Test-Driven Development) with various utility functions.

## Project Setup

This project uses Jest with Babel to support ES6 module syntax (import/export).

### Configuration Files

**package.json**
- Defines Jest and Babel dependencies
- Custom test script for ESM support

**jest.config.js**
- Jest configuration for ES modules
- Babel transformer setup
- Test file pattern matching

**.babelrc**
- Babel configuration for transpiling modern JavaScript
- Targets Node.js

## Functions Tested

### 1. capitalize(string)
Capitalizes the first character of a string.

**Tests:**
- Basic capitalization
- Already capitalized strings
- Single characters
- Empty strings
- Multiple words
- Strings starting with numbers

```javascript
capitalize('hello') // 'Hello'
capitalize('Hello') // 'Hello'
capitalize('') // ''
```

### 2. reverseString(string)
Returns a string in reverse order.

**Tests:**
- Basic reversal
- Single characters
- Empty strings
- Strings with spaces
- Special characters
- Palindromes
- Numbers in strings

```javascript
reverseString('hello') // 'olleh'
reverseString('Hello, World!') // '!dlroW ,olleH'
reverseString('racecar') // 'racecar'
```

### 3. calculator
An object with basic arithmetic operations.

**Methods:**
- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division

**Tests per operation:**
- Positive numbers
- Negative numbers
- Zero
- Decimals
- Division by zero (returns Infinity)

```javascript
calculator.add(2, 3) // 5
calculator.subtract(5, 3) // 2
calculator.multiply(3, 4) // 12
calculator.divide(10, 2) // 5
```

### 4. caesarCipher(string, shift)
Implements the Caesar cipher encryption algorithm.

**Features:**
- Wraps from z to a (and Z to A)
- Preserves case (uppercase stays uppercase, lowercase stays lowercase)
- Preserves punctuation, spaces, and numbers
- Handles negative shifts
- Handles shifts larger than 26

**Tests:**
- Basic shifting
- Wrapping (xyz + 3 = abc)
- Case preservation (lowercase, uppercase, mixed)
- Punctuation preservation
- Spaces and special characters
- Zero shift
- Large shifts
- Negative shifts
- Empty strings
- Complex examples

```javascript
caesarCipher('hello', 3) // 'khoor'
caesarCipher('HeLLo', 3) // 'KhOOr'
caesarCipher('Hello, World!', 3) // 'Khoor, Zruog!'
caesarCipher('xyz', 3) // 'abc'
```

### 5. analyzeArray(array)
Analyzes an array of numbers and returns statistics.

**Returns object with:**
- `average` - Mean of all numbers
- `min` - Minimum value
- `max` - Maximum value
- `length` - Number of elements

**Tests:**
- Basic analysis
- Single element arrays
- Negative numbers
- Mixed positive/negative
- Decimal numbers
- Duplicates
- Unsorted arrays

```javascript
analyzeArray([1, 8, 3, 4, 2, 6])
// {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// }
```

## Running Tests

### Run all tests once:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Expected Output
All 60+ tests should pass:
```
PASS  __tests__/capitalize.test.js
PASS  __tests__/reverseString.test.js
PASS  __tests__/calculator.test.js
PASS  __tests__/caesarCipher.test.js
PASS  __tests__/analyzeArray.test.js

Tests:       60+ passed
Time:        ~1-2 seconds
```

## Project Structure

```
testing-practice/
├── src/
│   ├── capitalize.js       # Capitalize implementation
│   ├── reverseString.js    # Reverse string implementation
│   ├── calculator.js       # Calculator object
│   ├── caesarCipher.js     # Caesar cipher with helper
│   └── analyzeArray.js     # Array analysis function
├── __tests__/
│   ├── capitalize.test.js  # Capitalize tests
│   ├── reverseString.test.js # Reverse string tests
│   ├── calculator.test.js  # Calculator tests
│   ├── caesarCipher.test.js # Caesar cipher tests
│   └── analyzeArray.test.js # Array analysis tests
├── jest.config.js          # Jest configuration
├── .babelrc               # Babel configuration
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Key Concepts Demonstrated

### 1. Test-Driven Development (TDD)
- Tests written before implementation
- Implementation done to make tests pass
- Red-Green-Refactor cycle

### 2. Jest Testing Framework
- Describe/test blocks for organization
- Assertions and expectations
- Test suites for related tests
- Comprehensive coverage of edge cases

### 3. ES6 Modules
- Import/export statements
- Babel transpilation for Jest
- ESM support in Node.js

### 4. Unit Testing Best Practices
- One concept per test
- Descriptive test names
- Edge case coverage
- Clear arrange-act-assert pattern
- Independent tests (no dependencies)

### 5. Algorithm Implementation
- String manipulation
- Mathematical operations
- Character encoding/decoding
- Array processing
- Helper functions (internal)

## Edge Cases Covered

**Capitalize:**
- Empty strings
- Single characters
- Already capitalized

**Reverse String:**
- Palindromes
- Special characters
- Multiple spaces

**Calculator:**
- Division by zero
- Negative numbers
- Decimal arithmetic

**Caesar Cipher:**
- Wrapping from z to a
- Case preservation
- Non-alphabetical characters
- Large shift values
- Negative shifts

**Analyze Array:**
- Single element
- Negative numbers
- Duplicates
- Decimal precision

## Troubleshooting

### "Cannot find module" error
- Ensure files are in correct directories
- Check import paths use `.js` extension or relative paths correctly

### Tests not running
- Ensure Node.js is installed
- Run `npm install` first
- Check Node.js version supports ESM

### Babel errors
- Verify `.babelrc` file exists
- Check `@babel/preset-env` is installed
- Restart test runner after npm install

## References

- [Jest Documentation](https://jestjs.io/)
- [Babel Documentation](https://babeljs.io/)
- [Caesar Cipher Algorithm](https://crypto.interactive-maths.com/caesar-shift-cipher.html)
- [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## License

This project is open source and available under the MIT License.
