"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
// it("1と2を足すと3になる", () => {
//   expect(sum(1, 2)).toBe(3);
// });
it.each `
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
    expect((0, sum_1.sum)(a, b)).toBe(expected);
});
