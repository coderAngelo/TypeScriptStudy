"use strict";
/** es5 定义函数的方法
 *
 * 函数生命法
 *  function run1() {
 *     return 'run1';
 *  }
 *
 * 匿名函数
 *  const run2 = function(){
 *     return 'run2';
 *  }
 *
 * */
/* 1. TS 中定义函数的方法 */
// 函数声明法
function run1_demo02() {
    return 'run1_demo02';
}
// console.log(run1_demo02);
// 匿名函数
var nRun = function () {
    return 123;
};
// console.log(nRun());
// TS 中定义方法传参
function getInfo1(name, age) {
    return name + " --- " + age;
}
// console.log(getInfo1('张三', 25));
var getInfo2 = function (name, age) {
    return name + " = = = " + age;
};
// console.log(getInfo2('李四', 20));
// 没有返回指定的方法
function fun() {
    console.log('fun');
}
/** 2. 方法可选参数
 *
 * es5 中方法里面的形参和实参可以不一样，但在 TS 中必须一样，如果不一样就需要配置可选参数
 *
 * 注意：可选参数必须配置在参数的最后；
 *
 */
function getInfo3(name, age, sex) {
    if (sex) {
        console.log(name + " -- " + age + " -- " + sex);
    }
    else {
        console.log(name + " -- " + age + " -- \u6027\u522B\u4FDD\u5BC6");
    }
}
// getInfo3('王五', 10, '男');
// getInfo3('赵六', 40);
/** 3. 默认参数，可选参数
 *
 * es5里面没法设置默认参数，es6 和 TS 中都可以设置默认参数
 *
 */
function getInfo4(name, age) {
    if (age === void 0) { age = 20; }
    console.log(name + " === " + age);
}
// getInfo4('赵六',21)
/* 4. 剩余参数  三点运算符 */
function sum1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
// console.log(sum1(1, 2, 3))
function sum2(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function Reload1(reloadStr) {
    if (typeof reloadStr === 'string') {
        return "\u6211\u53EB\uFF1A" + reloadStr;
    }
    else {
        return "\u5E74\u9F84: " + reloadStr;
    }
}
function Reload2(name, age) {
    if (age) {
        return "\u6211\u53EB\uFF1A" + name + " \u6211\u7684\u5E74\u9F84\u662F" + age;
    }
    else {
        return "\u6211\u53EB\uFF1A" + name + " \u5E74\u9F84\u4FDD\u5BC6";
    }
}
// console.log(Reload2('金亮'));
// console.log(Reload2('金亮',26))
/* 箭头函数  es6 */
setTimeout(function () {
    alert('run');
}, 3000);
