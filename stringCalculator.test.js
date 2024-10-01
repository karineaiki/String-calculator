const add = require ('./stringCalculator.js');

describe("String Calculator", () => {

    let input1 = "";
    let input2 = "1";
    let input3 = "2,3";
    let input4 = "1\n2";
    let input5 = "1,\n";

    test('should return 0 when input is empty', () =>{
        expect(add(input1)).toBe(0);
    });
    
    test('should return hte input when only one input is given', () =>{
        expect(add(input2)).toBe(1);
    });

    test('should return result of multiple inputs', () => {
        expect(add(input3)).toBe(5);
    });

    test('should return the result with escape', ()=> {
        expect(add(input4)).toBe(3);
    });

    test('should raise error if there is both separators', () => {
        expect(() => add(input5)).toThrow('Not allowed');
    })

    test('should consider ";" as delimiter', () => {
        expect(add("//b\n4,2,1\n1")).toBe(8);
    })

    test('should raise error if there are negative numbers', () => {
        expect(() => add("//+\n1,-4\n1")).toThrow('you cannot enter negative numbers')
    })
})
