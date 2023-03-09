const sum = require('./sum');
const multiply = require('./multiply');
const subtract = require('./subtract');
const divide = require('./divide');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 4 - 1 to equal 3', () => {
  expect(subtract(4, 1)).toBe(3);
});

test('multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
  });