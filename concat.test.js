const concat = require('./concat');

test('should concatenate array on the right with array on the left', () => {
  const left = [1, [2], 3]
  const right = [[4], 5, [6, 7], 8]
  const expected = [1, [2], 3, [4], 5, [6, 7], 8]

  expect(concat(left, right)).toEqual(expected)
});