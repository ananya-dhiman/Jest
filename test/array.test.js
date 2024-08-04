const array=require('../src/array');

test('array',()=>{
    const object = array([1,8,3,4,2,6]);
    expect(object).toStrictEqual({average: 4,min: 1,
        max: 8,
        length: 6});
})