"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_func_1 = require("./async_func");
it("delayがされた時間後にメッセージを返す", () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, async_func_1.delay)("Hello Jest", 1000);
    expect(result).toBe("Hello Jest");
}));
it("timeがマイナスの場合はエラーが発生する", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, async_func_1.delay)("Hello Jest", -1);
    }
    catch (e) {
        expect(e.message).toBe("timeは0以上で指定してください");
    }
}));
