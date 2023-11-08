import { isEven } from '@mysa/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);  
}