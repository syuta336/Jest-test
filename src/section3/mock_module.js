"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = readFile;
const fs_1 = __importDefault(require("fs"));
function readFile(path) {
    const data = fs_1.default.readFileSync(path, {
        encoding: "utf-8",
    });
    return data;
}
