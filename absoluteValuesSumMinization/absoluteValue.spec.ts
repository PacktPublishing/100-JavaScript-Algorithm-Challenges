import { absoluteValuesSumMinimization } from './absoluteValue';

describe(absoluteValuesSumMinimization.name, () => {
  it('ABS VALUE test1', () => {
    //act
    const result = absoluteValuesSumMinimization([2,4,7]);
    //assert
    expect(result).toBe(4);
  });

  it('ABS VALUE test2', () => {
    //act
    const result = absoluteValuesSumMinimization([2,4,7,6]);
    //assert
    expect(result).toBe(4);
  });

  it('ABS VALUE test3', () => {
    //act
    const result = absoluteValuesSumMinimization([2,4,7,6,6]);
    //assert
    expect(result).toBe(7);
  });

  it('ABS VALUE test4', () => {
    //act
    const result = absoluteValuesSumMinimization([2,4,7,6,6,8]);
    //assert
    expect(result).toBe(7);
  });

});