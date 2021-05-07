import Validator from '../Validator';

test('test Valiidate no latin', () => {
  const str = 'as!@ddfgDRFG76r';
  expect(Validator.validateUsername(str)).toBe(false);
});
test('test Valiidate no numbers at the beginning', () => {
  const str = '1asddfgDRFG76r';
  expect(Validator.validateUsername(str)).toBe(false);
});
test('test Valiidate no numbers at the end', () => {
  const str = 'asddfgDRFG76r2';
  expect(Validator.validateUsername(str)).toBe(false);
});
test('test Valiidate not three numbers in a row', () => {
  const str = 'asddfgDRFG726r';
  expect(Validator.validateUsername(str)).toBe(false);
});
test('test Valiidate good', () => {
  const str = 'asddfgDRFG76r';
  expect(Validator.validateUsername(str)).toBe(true);
});
