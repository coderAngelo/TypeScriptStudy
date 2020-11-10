/** 解决方案：定义约束规范接口，代码重用：泛型；
 *
 * 1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
 *
 * 2. 泛型：泛型就是解决 类 接口 方法的复用性
 */

// 定义通用接口：包含 add update delete get 方法；
interface DBI<T> {
    add(info: T): boolean;

    update(info: T, id: number): boolean;

    delete(id: number): boolean;

    get(id: number): any[];
}

// 定义操作 mysql 库的类  注意：要实现泛型接口，这个类也是泛型类
class MySqlDb<T> implements DBI<T> {

    constructor() {
        console.log('数据库已连接');
    }

    add(info: T): boolean {
        console.log(info)
        return false;
    }

    delete(id: number): boolean {
        console.log(id)
        return false;
    }

    get(id: number): any {
        console.log(id)
        return false;
    }

    update(info: T, id: number): any {
        console.log(info, id)
        return [{
            title: 'xxx',
            desc: 'xxxx'
        }, {
            title: 'xxx',
            desc: 'xxxx'
        }];
    }
}

// 定义操作 mssql 库的类  注意：要实现泛型接口，这个类也是泛型类
class MsSqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        console.log(info)
        return false;
    }

    delete(id: number): boolean {
        return false;
    }

    get(id: number): any[] {
        console.log(id)
        return [];
    }

    update(info: T, id: number): boolean {
        return false;
    }
}

//  操作用户表，定义一个 User_demo06 类做数据库映射
class User_demo06 {
    username: string | undefined;
    password: string | undefined;
}

const u06 = new User_demo06();
u06.username = '张三';
u06.password = '321';

const oMySql = new MsSqlDb<User_demo06>();
oMySql.add(u06)

const oMsSql = new MsSqlDb<User_demo06>();
oMsSql.add(u06)

const data = oMySql.get(0);
console.log(data)