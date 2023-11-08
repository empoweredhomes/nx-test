import { isEven } from './is-even';

describe('isEven', () => {

  it('2 is even', () => {
    expect(isEven(2)).toBe(true)
  })

  it('2 is even', () => {
    expect(isEven(2)).toBe(true)
  })

  it('3 is not even', () => {
    expect(isEven(3)).toBe(false)
  })
});

