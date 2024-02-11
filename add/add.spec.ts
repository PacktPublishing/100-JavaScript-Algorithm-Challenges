import {add, add2} from './add'

describe(add.name, () => {
  it('ADD test 1', () => {
    //act
    const result = add(1,2);
    //assert
    expect(result).toBe(3);
  });

  it('ADD test 2', () => {
    //act
    const result = add(3,2);
    //assert
    expect(result).toBe(5);
  });

});

//x in front of a variable will stop the test from running.
describe(add2.name, () => {
  //console.log(add2(2,3))
  it('ADD 2 test 1 ', () => {
    //arrange 
    const data = [1,2,3,4,5];
    //act
    const result = add2(...data);
    //assert
    expect(result).toBe(15);
  });

  it('ADD 2 test 2', () => {
    //arrange
    const data = [2,3];
    //act
    const result = add2(...data);
    //assert
    expect(result).toBe(5);
  });
});