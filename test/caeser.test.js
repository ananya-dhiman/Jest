const caeser=require('../src/caeser');

test('Shift', () => {
    expect(caeser("ABC",3)).toBe("DEF");

    

});
test('Shift', () => {
    expect(caeser("XYZ",3)).not.toBe("abc");
    
    

});
test('Shift', () => {
    expect(caeser("Hello",3)).toBe("Khoor");
    
    

});
test('Shift', () => {
    expect(caeser("XY .Z",3)).toBe("AB .C");
    
    

});