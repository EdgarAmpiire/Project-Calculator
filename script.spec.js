const calculator = require('./script')

describe("add", () => {
    test("adds 0 and 0", ()=> {
        expect(calculator.addNumbers(0,0)).toBe(0);
    })
    test("adds 4 and 6", ()=> {
        expect(calculator.addNumbers(4,6)).toBe(10);
    })
})

describe("subtract", () => {
    test("subtracts 2 and 4", () => {
        expect(calculator.subtractNumbers(2,4)).toBe(-2);
    })
    test("subtracts 10 and 4", () => {
        expect(calculator.subtractNumbers(10,4)).toBe(6);
    })
})

describe("divide", () => {
    test("divides 2 and 4", () => {
        expect(calculator.divideNumbers(2,4)).toBe(0.5);
    })
   test("divides 10 and 2", () => {
        expect(calculator.divideNumbers(10,2)).toBe(5);
    })
    test("divides 0 and 0", () => {
        expect(calculator.divideNumbers(0,0)).toBe("You cannot divide by 0!");
    })
    test("divides 5 and 0", () => {
        expect(calculator.divideNumbers(5,0)).toBe("You cannot divide by 0!");
    })
})

describe("multiply", () => {
    test("Multiplies 8 and 2", () => {
        expect(calculator.multiplyNumbers(8,2)).toBe(16);
    })
   test("Multiplies 10 and 1", () => {
        expect(calculator.multiplyNumbers(10,1)).toBe(10);
    })
})