"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_spy_1 = require("./mock_spy");
it("sumメソッドが呼び出される", () => {
    const calculator = new mock_spy_1.Calculator();
    const sumSpy = jest.spyOn(calculator, "sum");
    const result = calculator.sum(1, 2);
    expect(result).toBe(3);
    expect(sumSpy).toHaveBeenCalledTimes(1);
    expect(sumSpy).toHaveBeenCalledWith(1, 2);
    sumSpy.mockRestore();
});
