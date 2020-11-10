# TypeScriptStudy

### ts中为了使编写的代码更加规范更加利于维护，添加了类型校验

```TS编译
    一、 vscode配置自动编译

        1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",  


        2、第二步 任务 - 运行任务  监视tsconfig.json；

    二、 idea 编译：https://www.cnblogs.com/huanzi-qch/p/11232302.html
```

1. (demo01.ts)数据类型：
    - 布尔类型（boolean）
    - 数字类型（number）
    - 字符串类型（string）
    - 数组类型（array）
    - 元组类型（tuple）
    - 枚举类型（enum）
    - 任意类型（any）
    - null 和 undefined
    - void 类型
    - never 类型
    
2. (demo02.ts)TS中的函数：
    - 函数的定义；
    - 可选参数；
    - 默认参数；
    - 剩余参数；
    - 函数的重载；
    - 箭头函数 es6；
    
3. (demo03.ts)类
    - es5 中的类；
    - typeScript中的类
        1. 类的定义
        2. 继承 (extends,super)
        3. 类里面的修饰符 (public 公有,protected 保护,private 私有)
        4. 静态属性 静态方法 (static)
        5. 抽象类 继承 多态 [abstract 抽象(方法，类)]
        
4. (demo04.ts)TS 中的接口；
    - 属性类接口 (interface)
    - 函数类型接口
    - 可索引接口
    - 类类型接口
    - 接口扩展  [接口继承接口(extends)]
    
5. (demo05.ts)TS 中的泛型；
    - 泛型的定义；
    - 泛型函数；
    - 泛型类；
    - 泛型接口；
    
6. (demo06.ts) 综合使用
    - 功能：定义一个操作数据库的库；支持：Mysql、Mssql、MongoDb。
    - 要求：Mysql、MsSql、MongoDb功能一样，都有 add、update、delete、get方法
    - 注意：约束统一的规范、以及代码重用.
    
7. (demo07.ts) 模块
    - 定义
    - 模块到处的方法
    
8. (demo08.ts) 命名空间
    - 定义
    - 示例 (namespace)
    
9. (demo09.ts) 装饰器
    - 定义
    - 类装饰器
    - 属性装饰器
    - 方法装饰器
    - 参数装饰器
    - 装饰器执行顺序：属性》方法》方法参数》类