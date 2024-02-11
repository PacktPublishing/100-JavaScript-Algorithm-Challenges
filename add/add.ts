export const add = (param1: number, param2:number): number => {
  console.log('adding')
  return param1+param2;
};

export const add2 = (...param1: number[]): number => {
  let total = 0;
  param1.forEach(num => total+=num);
  return total;
};

// console.log(add(1,2));
// console.log(add(3,2));
// console.log(add2([1,2,3,4,5]));
// console.log(add2([2,3]));