"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// toThrow
const divide_1 = require("./divide");
it("0で割るとエラーが発生する", () => {
    expect(() => (0, divide_1.divide)(10, 0)).toThrow();
    expect(() => (0, divide_1.divide)(10, 0)).toThrow("0で割ることはできません");
});
