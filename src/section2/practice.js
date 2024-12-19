"use strict";
/**
 * 【演習】
 *  1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース
 *  2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース
 *  3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingList = void 0;
class ShoppingList {
    constructor() {
        this.list = [];
    }
    addItem(item) {
        this.list.push(item);
    }
    removeItem(item) {
        const index = this.list.indexOf(item);
        if (index === -1) {
            throw new Error(`アイテム: ${item} は存在しません`);
        }
        this.list.splice(index, 1);
    }
}
exports.ShoppingList = ShoppingList;
