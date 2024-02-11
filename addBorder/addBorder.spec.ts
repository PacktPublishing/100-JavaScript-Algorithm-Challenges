import { addBorder } from "./addBorder";

describe(addBorder.name, () => {
  it('Add border!', () => {
    //act
    const result = addBorder(["abc", "dfg"]);
    //assert
    expect(result).toStrictEqual(['*****',"*abc*", "*dfg*",'*****']);
  })
});