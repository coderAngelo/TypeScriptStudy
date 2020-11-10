"use strict";
// 1. 布尔类型
let flag = true;
// 2. 数字类型
let num = 123;
// 3. 字符串类型
let str = 'string';
// 4. 数组类型  多种
let arr1_1 = [1, 2, 3, 4, 5];
let arr1_2 = ['a', 'b', 'c'];
let arr2_1 = [1, 2, 3, 4, 5];
let arr2_2 = ['A', 'B', 'C'];
let arr3 = [1, 'b', 3, 'D'];
// 5. 元组类型（tuple）  属于数组的一种
let arr = [123, 'abc']; // 可以根据需求给相应位置的内容定义类型
/**
 * 6. 枚举类型（enum）
 *
 * 随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
 * 例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
 * 在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
 * 如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
 * 也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
 * 这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
 *
 * 示例：
 * enum 枚举名 {
 *     标识符[=整数型常数],
 *     标识符[=整数型常数],
 *     ...
 *     标识符[=整数型常数],
 * };
 *
 * 注意：1. 如果标识符没有赋值，则它的值为下标;
 *      2.
 */
let Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
let s = Flag.success;
let e = Flag.error;
let Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
let r = Color.red;
let o = Color.orange;
// console.log(o);
let Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
let E = Err.success;
// console.log(e);
// 7. 任意类型（any）
let aNum = 123;
aNum = 'str';
aNum = true;
/**
 * 8. null 和 undefined     是其他类型（never类型）的子类型；
 *
 * 注意，定义没有复制的就是 undefined；
 */
let uNum;
// console.log(uNum);
let nuNum;
nuNum = 123;
let Null = null;
// console.log(Null);
// 一个元素可能是 undefined类型、 null、 或者number类型；
let unnNum;
unnNum = 123;
// console.log(unnNum)
// 9. void类型   TS中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
function run1_demo01() {
    console.log('这是一个run方法');
}
// run1_demo01()
function run2() {
    return 123;
}
// console.log(run2());
// 10. never类型：是其他类型，包括 null 和 undefined 代表不会出现的值
let a;
a = (function () {
    throw new Error('错误');
})();
