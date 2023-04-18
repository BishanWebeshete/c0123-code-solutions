import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('works with an empty array', () => {
    const numbers = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const result = toDollars(3);
    expect(result).toEqual('$3.00');
  });
  it('formats decimals with just two digits, rounding up', () => {
    const result = toDollars(5.399333);
    expect(result).toEqual('$5.40');
  });
});

describe('divideBy', () => {
  it('divides each element by the divisor', () => {
    const result = divideBy([2, 4, 6, 8], 2);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('does not modify the original array', () => {
    const numbers = [2, 3, 4, 8];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 1.5, 2, 4]);
    expect(numbers).toEqual([2, 3, 4, 8]);
  });
});

describe('multiplyBy', () => {
  it('multiplies number values', () => {
    const obj = { foo: 1, bar: 2 };
    const result = multiplyBy(obj, 3);
    expect(result).toEqual({ foo: 3, bar: 6 });
  });
});
