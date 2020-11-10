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

/* 1. 属性接口：对 json 的约束  通过 interface 定义 */

    interface FullName1 {    // 定义 FullName 接口，里面包括 firstName secondName
        firstName: string;
        secondName: string;
    }

    function printName(name: FullName1) {
        // 调用方法时：必须传入对象  firstName  secondName，但不限于仅有 firstName secondName
        console.log(name.firstName, name.secondName);
    }

    // printName({firstName: 'jin', secondName: 'liang'});

    // let nameData = {
    //     // 参数的顺序可以不一样
    //     secondName: 'san',
    //     firstName: 'zhang',
    //     age: 16
    // }
    // printName(nameData);


    /* 可选属性 */


        interface FullName2 {
            firstName: string;
            secondName: string;
            age?: number
        }

        function getName(name: FullName2) {

            console.log(name)
        }

        // getName({
        //     firstName:'firstName',
        //     secondName:'secondName',
        //     // age:16
        // })


        //应用接口 实现原生js封装的ajax

        interface Config {
            type: string;
            url: string;
            data?: string;
            dataType: string;
        }

        function ajax(config: Config) {

            const xhr = new XMLHttpRequest();

            xhr.open(config.type, config.url, true);

            xhr.send(config.data);

            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log('成功');


                    if (config.dataType == 'json') {

                        console.log(JSON.parse(xhr.responseText));
                    } else {
                        console.log(xhr.responseText)

                    }


                }
            }
        }

        ajax({
            type: 'get',
            data: 'name',
            url: 'http://a.itying.com/api/productlist', //api
            dataType: 'json'
        })


/* 2. 函数类型接口：对方法传入的参数 以及返回值进行约束    批量约束 （interface）*/

    // 加密的函数类型接口

        interface enctypt {
            (key: string, value: string): string;
        }

        const md5: enctypt = function (key, value): string {
            // 模拟操作
            return key + value;
        }

        // console.log(md5('name','张三'))

        const sha1: enctypt = function (key, value): string {
            return key + ' --- ' + value;
        }

        // console.log(sha1('name','李四'))


/** 3. 可索引接口：数组、对象的约束  （不常用）
 *
 * // TS 定义数组的方式
 *
 * let arr:number[] = [123,123]
 *
 * let arr1:Array<string> = ['123','123']
 *
 */

    // 可索引接口 对数组的约束

        interface userArr {
            [index: number]: string;
        }

        let arrUserArr: userArr = ['aaa', '111'];

        // console.log(arrUserArr[0])

    // 可索引接口 对对象的约束；

        interface userObj {
            [index: string]: string;
        }

        let arrUserObj: userObj = {name: '张三'};

        // console.log(arrUserObj['name'])

/* 4. 类类型结构：对类的约束  和 抽象类有点相似 */

    interface Animal {
        name: string;

        eat(str: string): void
    }

    class Dog1 implements Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat() {
            console.log(this.name + '吃骨头')
        }
    }

    // const d=new Dog1('小黑')
    // d.eat()

    class Cat1 implements Animal {
        name: string;

        constructor(name: string) {

            this.name = name;

        }

        // @ts-ignore
        eat(food: string) {

            console.log(this.name + '吃' + food);
        }
    }

    // const c=new Cat1('小花');
    // c.eat('老鼠');

/* 5. 接口的扩展：接口可以继承接口 */

    interface Animal3 {
        eat(): void;
    }

    interface Person3 extends Animal3 {
        work(): void;
    }

    class Web3 implements Person3 {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat() {
            console.log(this.name + '在吃饭')
        }

        work() {
            console.log(this.name + '在工作')
        }
    }

    // const w=new Web3('小李');
    // w.eat();

    class Programmer {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        coding(code: string) {
            console.log(this.name + code)
        }
    }

    class Web4 extends Programmer implements Person3 {
        constructor(name: string) {
            super(name);
        }

        eat() {

            console.log(this.name + '喜欢吃馒头')
        }

        work() {

            console.log(this.name + '写代码');
        }

    }

    // const w1=new Web4('小李');
    // w1.eat();
    // w1.work()
    // w1.coding('写ts代码');