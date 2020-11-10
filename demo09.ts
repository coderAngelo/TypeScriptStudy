/** 定义
 * 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
 *
 * 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
 *
 * 装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）
 *
 * 装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
 *
 */


/** 1. 类装饰器
 *
 * 类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 传入一个参数
 *
 */

// 类装饰器    普通装饰器（无参）
// function logClass1(params: any) {    // 定义装饰器
//     // params 就是当前类
//     console.log(params);
//
//     // 拓展属性和方法  原型链
//     params.prototype.apiUrl='www.baidu.com -- 扩展属性';
//     params.prototype.run=function () {
//         console.log('这是扩展在原型链上面的 run 方法');
//     }
//
// }
//
// @logClass1   // 装饰器使用方法
// class HttpClient1 {  // 定义类
//     constructor() {
//     }
//     getData(){
//
//     }
// }

// const http1:any=new HttpClient1();
// console.log(http1.apiUrl);
// http1.run()


// 类装饰器    装饰器工厂（可传参）
// function logClass2(params: any) {
//     return function (target:any){
//         // params:使用装饰器时传入的参数   target:对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//         console.log(params);
//         console.log(target);
//         target.prototype.apiUrl=params
//     }
// }
//
// @logClass2('装饰器的一个参数')
// class HttpClient2 {
//     constructor() {
//     }
//     getData(){}
// }
//
// // const http2:any=new HttpClient2();
// // console.log(http2.apiUrl);


/** 类装饰器
 *
 * 下面是一个重载构造函数的例子
 *
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 *
 * 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
 *
 */
// function logClass3(target: any) {
//     console.log(target);
//
//     return class extends target{
//         // 替换类中的属性
//         apiUrl:any='我是装饰器中的 apiUrl';
//
//         // 替换类中的方法
//         getData(){
//             this.apiUrl=this.apiUrl+' ----'
//             console.log(this.apiUrl)
//         }
//     }
// }
//
// @logClass3
// class HttpClient3 {
//     public apiUrl:string|undefined;
//
//     constructor() {
//         this.apiUrl='我是类中的 apiUrl'
//     }
//
//     getData(){
//         console.log(this.apiUrl)
//     }
// }
//
// // const http3 = new HttpClient3();
// // http3.getData()


/** 属性装饰器
 *
 * 属性装饰器表达式会在运行时当作函数被调用，
 *
 * 传入下列2个参数：
 * 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2、属性的名字。
 *
 */
// function logClass4(params: any) {
//     return function (target: any,attr:any) {
//         console.log(params);
//         console.log(target);
//         console.log(attr);
//
//         // 给类中的属性赋值
//         target[attr] = params   // target[attr] 固定写法
//     }
// }
//
//
//
// class HttpClient4 {
//     @logClass4('xxx')
//     public apiUrl:any|undefined;
//
//     constructor() {
//     }
//
//     getData(){
//         console.log(this.apiUrl)
//     }
// }
//
// // const http4=new HttpClient4()
// // http4.getData()


/** 方法装饰器
 *
 * 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
 *
 * 方法装饰会在运行时传入下列3个参数：
 * 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2、方法的名字。
 * 3、成员的属性描述符。
 *
 */

// 方法装饰器一
// function logClass5(params: any) {
//     return function (target: any, methodName: any, desc: any) {
//         console.log(params)
//         console.log(target)
//         console.log(methodName)
//         console.log(desc)
//
//         // 添加方法
//         target.run=function (){
//             console.log('run')
//         }
//     }
// }
//
//
// class HttpClient5{
//     public apiUrl:any|undefined;
//
//     constructor() {
//         this.apiUrl='www.baidu.com'
//     }
//     @logClass5('xxx')
//     getData(){
//         console.log(this.apiUrl)
//     }
// }
//
// // const http5:any=new HttpClient5()
// // http5.getData()
// // http5.run()


// 方法装饰器二
// function logClass6(params: any) {
//     return function (target: any, methodName: any, desc: any) {
//         console.log(params)
//         console.log(target)
//         console.log(methodName)
//         console.log(desc)
//
//         // 修改装饰器方法  把装饰器方法里面的传入的所有参数改为 string
//
//         // 1. 保存当前方法
//         let oMethod=desc.value;
//
//         desc.value=function(...args:any[]){
//             args=args.map((value)=>{
//                 return String(value);
//             })
//             oMethod.apply(this,args);
//         }
//     }
// }
//
//
// class HttpClient6{
//     public apiUrl:any|undefined;
//
//     constructor() {
//     }
//
//     @logClass6('xxx')
//     getData(...args:any[]){
//         console.log(args);
//         console.log('我是类中的 getData 方法')
//     }
// }
//
// // const http6 = new HttpClient6()
// // http6.getData(123,123)


/** 方法参数装饰器
 *
 * 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据
 *
 * 传入下列3个参数
 * 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2、方法的名字。
 * 3、参数在函数参数列表中的索引。
 *
 */

// function logParams7(params: any) {
//
//     return function (target: any, methodName: any, paramsIndex: any) {
//
//         console.log(params);
//
//         console.log(target);
//
//         console.log(methodName);
//
//         console.log(paramsIndex);
//
//
//         target.apiUrl = params;
//
//     }
//
// }
//
// class HttpClient7 {
//     public url: any | undefined;
//
//     constructor() {
//     }
//
//     getData(@logParams7('xxxxx') uuid: any) {
//         console.log(uuid);
//     }
// }
//
//
// // const http7: any = new HttpClient7();
// // http7.getData(123456);
// // console.log(http7.apiUrl);


/** 装饰器执行顺序：属性》方法》方法参数》类
 *
 * 如果有多个同样的装饰器，它会先执行后面的
 *
 */

// function logClass1(params: string) {
//     return function (target: any) {
//         console.log('类装饰器1')
//     }
// }
//
// function logClass2(params: string) {
//     return function (target: any) {
//         console.log('类装饰器2')
//     }
// }
//
// function logAttribute1(params?: string) {
//     return function (target: any, attrName: any) {
//         console.log('属性装饰器1')
//     }
// }
//
// function logAttribute2(params?: string) {
//     return function (target: any, attrName: any) {
//         console.log('属性装饰器2')
//     }
// }
//
// function logMethod1(params?: string) {
//     return function (target: any, attrName: any, desc: any) {
//         console.log('方法装饰器1')
//     }
// }
//
// function logMethod2(params?: string) {
//     return function (target: any, attrName: any, desc: any) {
//         console.log('方法装饰器2')
//     }
// }
//
//
// function logParams1(params?: string) {
//     return function (target: any, attrName: any, desc: any) {
//         console.log('方法参数装饰器1')
//     }
// }
//
// function logParams2(params?: string) {
//     return function (target: any, attrName: any, desc: any) {
//         console.log('方法参数装饰器2')
//     }
// }
//
//
// @logClass1('http://www.itying.com/api')
// @logClass2('xxxx')
// class HttpClient {
//     @logAttribute1()
//     @logAttribute2()
//     public apiUrl: string | undefined;
//
//     constructor() {
//     }
//
//     @logMethod1()
//     @logMethod2()
//     getData() {
//         return true;
//     }
//
//     setData(@logParams1() attr1: any, @logParams2() attr2: any,) {
//
//     }
// }
//
// const http: any = new HttpClient();