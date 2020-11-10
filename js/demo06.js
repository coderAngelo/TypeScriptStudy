"use strict";
/** 解决方案：定义约束规范接口，代码重用：泛型；
 *
 * 1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
 *
 * 2. 泛型：泛型就是解决 类 接口 方法的复用性
 */
// 定义操作 mysql 库的类  注意：要实现泛型接口，这个类也是泛型类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
        console.log('数据库已连接');
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
        return false;
    };
    MySqlDb.prototype.delete = function (id) {
        console.log(id);
        return false;
    };
    MySqlDb.prototype.get = function (id) {
        console.log(id);
        return false;
    };
    MySqlDb.prototype.update = function (info, id) {
        console.log(info, id);
        return [{
                title: 'xxx',
                desc: 'xxxx'
            }, {
                title: 'xxx',
                desc: 'xxxx'
            }];
    };
    return MySqlDb;
}());
// 定义操作 mssql 库的类  注意：要实现泛型接口，这个类也是泛型类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return false;
    };
    MsSqlDb.prototype.delete = function (id) {
        return false;
    };
    MsSqlDb.prototype.get = function (id) {
        console.log(id);
        return [];
    };
    MsSqlDb.prototype.update = function (info, id) {
        return false;
    };
    return MsSqlDb;
}());
//  操作用户表，定义一个 User_demo06 类做数据库映射
var User_demo06 = /** @class */ (function () {
    function User_demo06() {
    }
    return User_demo06;
}());
var u06 = new User_demo06();
u06.username = '张三';
u06.password = '321';
var oMySql = new MsSqlDb();
oMySql.add(u06);
var oMsSql = new MsSqlDb();
oMsSql.add(u06);
var data = oMySql.get(0);
console.log(data);
