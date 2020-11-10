"use strict";
/** 接口的定义
 *
 * 接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，
 * 在程序设计里面，接口起到一种限制和规范的作用。
 * 接口定义了某一批类所需要遵守的规范，
 * 接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，
 * 它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。
 * typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
 *
 * 作用：定义标准；
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(name) {
    // 调用方法时：必须传入对象  firstName  secondName，但不限于仅有 firstName secondName
    console.log(name.firstName, name.secondName);
}
function getName(name) {
    console.log(name);
}
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    data: 'name',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
// console.log(md5('name','张三'))
var sha1 = function (key, value) {
    return key + ' --- ' + value;
};
var arrUserArr = ['aaa', '111'];
var arrUserObj = { name: '张三' };
var Dog1 = /** @class */ (function () {
    function Dog1(name) {
        this.name = name;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    return Dog1;
}());
// const d=new Dog1('小黑')
// d.eat()
var Cat1 = /** @class */ (function () {
    function Cat1(name) {
        this.name = name;
    }
    // @ts-ignore
    Cat1.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Cat1;
}());
var Web3 = /** @class */ (function () {
    function Web3(name) {
        this.name = name;
    }
    Web3.prototype.eat = function () {
        console.log(this.name + '在吃饭');
    };
    Web3.prototype.work = function () {
        console.log(this.name + '在工作');
    };
    return Web3;
}());
// const w=new Web3('小李');
// w.eat();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web4 = /** @class */ (function (_super) {
    __extends(Web4, _super);
    function Web4(name) {
        return _super.call(this, name) || this;
    }
    Web4.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Web4.prototype.work = function () {
        console.log(this.name + '写代码');
    };
    return Web4;
}(Programmer));
// const w1=new Web4('小李');
// w1.eat();
// w1.work()
// w1.coding('写ts代码');
