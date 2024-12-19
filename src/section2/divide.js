"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroDivisorError = void 0;
exports.divide = divide;
class ZeroDivisorError extends Error {
}
exports.ZeroDivisorError = ZeroDivisorError;
function divide(dividend, divisor) {
    if (divisor === 0)
        throw new ZeroDivisorError("0で割ることはできません");
    return dividend / divisor;
}
