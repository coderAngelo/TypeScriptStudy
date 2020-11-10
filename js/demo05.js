"use strict";
/** 泛型的定义
 *
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 *
 * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
 *
 * 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
 *
 * // 只能返回string类型的数据
 *
 *      function getData (value:string):string{
 *          return value;
 *      }
 *
 * // 同时返回 string类型 和number类型  （代码冗余）;
 *
 *      function getData1(value:string):string{
 *          return value;
 *      }
 *      function getData2(value:number):number{
 *          return value;
 *      }
 *
 * // 同时返回 string类型 和number类型    any可以解决这个问题，但是 any 放弃了类型检查.
 * // 传入类型和返回类型可以不一致
 *      function getData3(value:any):any{
 *          return '哈哈哈';
 *      }
 *
 */
/** 泛型函数：可以支持不特定的数据类型   要求：传入的参数和返回的参数一致
 *
 * T代表泛型，具体什么类型是调用方法时决定
 *
 */
function getData_demo05(value) {
    return value;
}
// console.log(getData_demo05<number>(123))  // 参数必须是 number
// console.log(getData_demo05<string>('123')) // 返回值也是 string
// getData<number>('2112'); // 错误写法
/** 泛型类 (泛型属性) 比如有个最小堆算法，需要同时支持返回数字和字符串 a-z 两种类型。
 *
 * //  数字算法
 *  class MinClass{
 *      list:number[]=[]
 *      add(num:number){
 *          this.list.push(num)
 *      }
 *      min(){
 *          let minNum=this.list[0];
 *          for(let i=0;i<=this.list.length;i++){
 *              if(minNum>this.list[i]){
 *                  minNum=this.list[i];
 *              }
 *          }
 *      }
 *  }
 */
// 泛型实现
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = []; // 泛型数组，与调用时类型 MinClass<T>
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var getData1 = function (value) {
    return value;
};
// getData1<string>('张三')
// getData1<number>(123)
/** 泛型类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)
 *
 * 1. 定义类；
 * 2. 把类作为参数约束数据传入的类型；
 *
 * 定义一个User的类这个类的作用就是映射数据库字段，
 * 然后定义一个 MysqlDb的类这个类用于操作数据库，
 * 然后把User类作为参数传入到MysqlDb中。
 *
 */
// 案例 1
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb1 = /** @class */ (function () {
    function MysqlDb1() {
    }
    MysqlDb1.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDb1;
}());
// const u=new User();
//
// u.username='张三';
// u.password=123456;
//
// const Db=new MysqlDb1();
//
// Db.add(u);
// 案例 2
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        console.log(info.title);
        return true;
    };
    return MysqlDb;
}());
// let a1 =new ArticleCate();
//
// a1.title="国内";
// a1.desc="国内新闻";
// a1.status=1;
//
// const Db=new MysqlDb();
// Db.add(a1);
// *** 问题：代码重复
// 定义操作数据库的泛型类
var MysqlDb5 = /** @class */ (function () {
    function MysqlDb5() {
    }
    MysqlDb5.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb5.prototype.upDated = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb5;
}());
// 给 User5 表增加数据
var User5 = /** @class */ (function () {
    function User5() {
    }
    return User5;
}());
var u5 = new User5();
u5.username = '张三';
u5.password = 123;
var Db5_1 = new MysqlDb5();
Db5_1.add(u5);
// 给 ArticleCate5 表增加数据
var ArticleCate5 = /** @class */ (function () {
    function ArticleCate5(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate5;
}());
var a5 = new ArticleCate5({
    title: '分类',
    desc: '123',
    status: true
});
var Db5_2 = new MysqlDb5();
Db5_2.add(a5);
// 修改 ArticleCate5 表的数据
var a5_upData = new ArticleCate5({
    title: '分类upData',
    desc: '321'
});
a5_upData.status = false;
var Db5_3 = new MysqlDb5();
Db5_3.upDated(a5_upData, 0);
