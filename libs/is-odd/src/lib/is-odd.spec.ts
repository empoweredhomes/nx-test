import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('1 should be odd', () => {
    expect(isOdd(1)).toEqual(true);
  });

  it('3 should be odd', () => {
    expect(isOdd(3)).toEqual(true);
  });

  it('2 should not be odd', () => {
    expect(isOdd(2)).toEqual(true);
  });
});
