"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = delay;
function delay(message, time) {
    return new Promise((resolve, reject) => {
        if (time >= 0) {
            return setTimeout(() => resolve(message), time);
        }
        else {
            reject(new Error("timeは0以上で指定してください"));
        }
    });
}
