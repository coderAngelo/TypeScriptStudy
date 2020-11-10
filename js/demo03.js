"use strict";
/*  */
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
/**es5 中的类
 *
 * 1. 最简单的类(构造函数)
 *
 *  function Person() {
 *      this.name='aaa';
 *      this.age=20;
 *  }
 *  const p = new Person();
 *  console.log(p.name);
 *
 * 2. 构造函数和原型链里面增加方法
 *
 *  function Person() {
 *      this.name='aaa';
 *      this.age=20;
 *      this.run=function(){
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *
 *  原型链上面的属性会被多个实例共享    构造函数不会
 *
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *  const p = new Person()
 *  console.log(p.name);
 *  p.run();
 *  p.work()
 *
 *
 * 3. 类的静态方法
 *
 *  function Person() {
 *      this.name='aaa';
 *      this.age=20;
 *      this.run=function(){
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *  Person.getInfo = function(){
 *      console.log('这是Person的静态方法')
 *  }
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *
 *  var p=new Person();
 *  p.work();
 *
 *  // 调用静态方法
 *  Person.getInfo();
 *
 *
 * 4. 继承，对象冒充
 *
 *  function Person() {
 *      this.name='aaa';    // 属性
 *      this.age=20;
 *      this.run=function(){    // 实例方法
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *
 * //Web类 继承Person类   对象冒充
 * function Web(){
 *     Person.call(this);   // 对象冒充实现继承
 * }
 *
 * const w=new Web();
 * w.run(); // 对象冒充可以继承构造函数里面的属性和方法；
 * w.work();    // 无法继承原型链上面的属性和方法；
 *
 *
 * 5. 原型链实现继承
 *
 *  function Person() {
 *      this.name='aaa';    // 属性
 *      this.age=20;
 *      this.run=function(){    // 实例方法
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *
 *  原型链实现继承
 *  function Web(){};
 *  Web.prototype=new Person();
 *  const w = new Web();
 *
 *  //原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
 *  w.run();
 *  w.work();
 *
 *  6. 原型链继承的问题
 *
 *  function Person(name,age){
 *      this.name=name; // 属性;
 *      this.age=age;
 *      this.run=function(){    // 实例方法；
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *
 *  //实例化子类的时候没法给父类传参
 *
 *  function Web(name,age){};
 *  Web.prototype=new Person();
 *  const w = new Web('王五',22);
 *  w.run();
 *
 *
 *  7. 原型链+对象冒充的组合继承模式
 *
 *  function Person(name,age){
 *      this.name=name; // 属性;
 *      this.age=age;
 *      this.run=function(){    // 实例方法；
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *
 *  function Web(name,age){
 *      Person.call(this,name,age) // 对象冒充继承   实例化子类可以给父类传参
 *
 *  }
 *
 *  Web.prototype = new Person();
 *  const w = new Web('张龙'，20)  // 实例化给父类传参
 *
 *  w.run();
 *  w.work();
 *
 *
 *  (另一种方式)
 *
 *  function Person(name,age){
 *      this.name=name; // 属性;
 *      this.age=age;
 *      this.run=function(){    // 实例方法；
 *          console.log(this.name + '在跑步')；
 *      }
 *  }
 *
 *  Person.prototype.sex='男'；
 *  Person.prototype.work=function(){
 *      console.log(this.name + '在工作')
 *  }
 *
 *  function Web(name,age){
 *      Person.call(this,name,age) // 对象冒充继承   实例化子类可以给父类传参
 *  }
 *
 *  Web.prototype=Person.prototype;
 *  const w = new Web('张龙'，20)  // 实例化给父类传参
 *
 *  w.run();
 *  w.work();
 */
/* TS 类 */
// 1. TS类的定义
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.run = function () {
        console.log(this.name + '在跑步');
    };
    return Person;
}());
// const p=new Person('张龙');
// p.getName();
// p.setName('赵虎');
// p.getName();
// p.run();
/** TS 类的继承
 * extends、 super
 *
 */
// #基础
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name) {
        return _super.call(this, name) || this;
    }
    return Web1;
}(Person));
// const w=new Web1('张三');
// w.run();
// #拓展  当子类中的方法与父类重复，则子类方法会覆盖父类方法，代码执行子类方法；
var Web2 = /** @class */ (function (_super) {
    __extends(Web2, _super);
    function Web2(name) {
        return _super.call(this, name) || this;
    }
    Web2.prototype.run = function () {
        console.log(this.name + '在跑步 --- 子类');
    };
    return Web2;
}(Person));
// const w=new Web2('张三');
// w.run();
/** TS 类的修饰符，三种属性定义方式
 *
 * 1. public :公有    在当前类里面、子类 、类外面都可以访问
 *
 * 2. protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
 *
 * 3. private ：私有   在当前类里面可以访问，子类、类外部都没法访问
 *
 * 属性如果不加修饰符 默认就是 公有 （public）
 */
var Qualifier = /** @class */ (function () {
    function Qualifier() {
        // 默认
        this.name = '金';
        // public 公有
        this.age = 26;
        // protected   保护类型
        this.sex = '男';
        // private 私有
        this.height = 176;
    }
    Qualifier.prototype.run = function () {
        console.log(this.name + '在跑步');
        console.log('我的年龄' + this.age);
        console.log('我的性别' + this.sex);
        console.log('我的身高' + this.height);
    };
    return Qualifier;
}());
// const q=new Qualifier()
// console.log(q.name,q.age,q.sex,q.height);   // 其中 sex 和 height 前者为保护属性，后者为私有属性，所以类外无法访问；
var ChildQualifier1 = /** @class */ (function (_super) {
    __extends(ChildQualifier1, _super);
    function ChildQualifier1() {
        return _super.call(this) || this;
    }
    ChildQualifier1.prototype.ChildRun = function () {
        console.log(this.name + '在跑步 --- 子类');
        console.log('我的年龄' + this.age + ' --- 子类');
        console.log('我的性别' + this.sex + ' --- 子类');
        // console.log('我的身高'+this.height+' --- 子类');   // 私有属性子类中无法访问
    };
    return ChildQualifier1;
}(Qualifier));
// const c=new ChildQualifier1();
// c.ChildRun();
/** TS静态属性  静态方法（static）
 *
 * 1. JS静态属性和方法
 *
 * function $(element){
 *      return new Base(element)
 * }
 *
 * $.name='静态属性'    // 静态属性声明
 * $.get=function(){}   // 静态方法
 *
 * function Base(element){
 *      this.element=获取dom节点;
 *      this.css=function(arr,value){
 *          this.element.style.arr=value;
 *      }
 *  }
 *
 *  $('#box').css('color','red')
 *
 *   $.get('url',function(){})  // 静态方法调用
 *
 */
var Per = /** @class */ (function () {
    function Per(name) {
        this.age = 20;
        this.name = name;
    }
    Per.prototype.run = function () {
        console.log(this.name + '在跑步');
    };
    Per.work = function () {
        console.log(Per.sex + '在工作');
    };
    Per.sex = '男'; // 静态属性
    return Per;
}());
// const p=new Per('aaa');
//
// p.run();    // 实例方法调用；
// Per.work(); // 静态方法调用；
/** 多态
 *
 * 父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现；
 *
 * 多态属于继承
 *
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃什么');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '啃骨头');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + '吃小鱼');
    };
    return Cat;
}(Animal));
/** TS 中的抽象类
 *
 * 它是提供其他类继承的基类，不能直接被实例化。
 *
 * 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 *
 * abstract 抽象方法只能放在抽象类里面;
 *
 * 抽象类和抽象方法用来定义标准;
 *
 */
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal(name) {
        this.name = name;
    }
    AbstractAnimal.prototype.run = function () {
        console.log('抽象类以外的方法可以不用实现');
    };
    return AbstractAnimal;
}());
var AbstractDog = /** @class */ (function (_super) {
    __extends(AbstractDog, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function AbstractDog(name) {
        return _super.call(this, name) || this;
    }
    AbstractDog.prototype.eat = function () {
        console.log(this.name + '啃骨头');
    };
    return AbstractDog;
}(AbstractAnimal));
var ad = new AbstractDog('小黑');
ad.eat();
