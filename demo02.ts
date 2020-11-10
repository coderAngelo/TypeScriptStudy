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
        function run1_demo02(): string {
            return 'run1_demo02';
        }
        // console.log(run1_demo02);
    // 匿名函数
        const nRun = function (): number {
            return 123
        }
        // console.log(nRun());

    // TS 中定义方法传参
        function getInfo1(name: string, age: number): string {
            return `${name} --- ${age}`
        }
        // console.log(getInfo1('张三', 25));

        const getInfo2 = function (name: string, age: number): string {
            return `${name} = = = ${age}`
        }
        // console.log(getInfo2('李四', 20));

    // 没有返回指定的方法
        function fun(): void {
            console.log('fun');
        }

/** 2. 方法可选参数
 *
 * es5 中方法里面的形参和实参可以不一样，但在 TS 中必须一样，如果不一样就需要配置可选参数
 *
 * 注意：可选参数必须配置在参数的最后；
 *
 */

    function getInfo3(name: string, age: number, sex?: string): void {
        if (sex) {
            console.log(`${name} -- ${age} -- ${sex}`)
        } else {
            console.log(`${name} -- ${age} -- 性别保密`)
        }
    }
    // getInfo3('王五', 10, '男');
    // getInfo3('赵六', 40);

/** 3. 默认参数，可选参数
 *
 * es5里面没法设置默认参数，es6 和 TS 中都可以设置默认参数
 *
 */

    function getInfo4(name: string, age: number = 20) {
        console.log(`${name} === ${age}`)
    }

    // getInfo4('赵六',21)

/* 4. 剩余参数  三点运算符 */
    function sum1(...result: number[]): number {  // 参数求和函方法
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }
    // console.log(sum1(1, 2, 3))

    function sum2(a: number, b: number, ...result: number[]): number {   // 固定参数求和方法
        let sum = a + b;
        for (let i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }
    // console.log(sum2(1, 2, 1, 2, 3))


/** 5. TS 函数重载
 *
 * java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
 *
 * typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
 *
 * ts为了兼容es5 以及 es6 重载的写法和java中有区别。
 *
 * */

    function Reload1(name: string): string;
    function Reload1(age: number): string;
    function Reload1(reloadStr: any) {
        if (typeof reloadStr === 'string') {
            return `我叫：${reloadStr}`
        } else {
            return `年龄: ${reloadStr}`
        }
    }
    // console.log(Reload1('aaa'))
    // console.log(Reload1(20))

    function Reload2(name: string): string;
    function Reload2(name: string, age?: number): string;
    function Reload2(name: any, age?: any) {
        if (age) {
            return `我叫：${name} 我的年龄是${age}`
        } else {
            return `我叫：${name} 年龄保密`
        }
    }
    // console.log(Reload2('金亮'));
    // console.log(Reload2('金亮',26))

/* 箭头函数  es6 */

    setTimeout(() => {

        alert('run')
    }, 3000)