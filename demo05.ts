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

    function getData_demo05<T>(value: T): T {
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

    class MinClass<T> { // 调用时确认类型，与传入类型相符 value:T
        public list: T[] = []; // 泛型数组，与调用时类型 MinClass<T>

        add(value: T): void {
            this.list.push(value);
        }

        min(): T {    // 返回类型与调用时类型 MinClass<T> 相符
            let minNum = this.list[0];
            for (let i = 0; i < this.list.length; i++) {
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                }
            }
            return minNum;
        }
    }

    // const m1= new MinClass<number>(); // 实例化类 并且指定了类的T代表的类型
    //
    // m1.add(1);
    // m1.add(18);
    // m1.add(32);
    // m1.add(9);
    // m1.add(0);
    // console.log(m1.min());
    //
    // const m2= new MinClass<string>();
    //
    // m2.add('a');
    // m2.add('V');
    // m2.add('v');
    // m2.add('aa');
    // m2.add('z');
    // console.log(m2.min());  // 字符的ASCII编码的大小

/** 泛型接口(函数)
 *
 * // 常规函数类型接口
 *  interface ConfigFn{
 *      (value1:string,value:string):string;
 *  }
 *
 *  let setData:ConfigFn=function(value1:string,value2:string):string{
 *      return value1+value2;
 *  }
 *
 *  setData('name','张三');
 */

    interface ConfigFn1 {
        <T>(value: T): T
    }

    const getData1: ConfigFn1 = function <T>(value: T): T {
        return value;
    }

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
        class User {
            username: string | undefined;
            password: number | undefined;
        }

        class MysqlDb1 {
            add(user: User): boolean {
                console.log(user);
                return true;
            }
        }

        // const u=new User();
        //
        // u.username='张三';
        // u.password=123456;
        //
        // const Db=new MysqlDb1();
        //
        // Db.add(u);

    // 案例 2
        class ArticleCate {
            title: string | undefined;
            desc: string | undefined;
            status: number | undefined
        }


        class MysqlDb {
            add(info: ArticleCate): boolean {
                console.log(info);
                console.log(info.title);
                return true;
            }

        }

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
    class MysqlDb5<T> {
        add(info: T): boolean {
            console.log(info);
            return true;
        }

        upDated(info: T, id: number): boolean {
            console.log(info);
            console.log(id);
            return true;
        }
    }

// 给 User5 表增加数据
    class User5 {
        username: string | undefined;
        password: number | undefined;
    }

    const u5 = new User5();
    u5.username = '张三';
    u5.password = 123;

    const Db5_1 = new MysqlDb5<User5>();
    Db5_1.add(u5);

// 给 ArticleCate5 表增加数据
    class ArticleCate5 {
        title: string | undefined;
        desc: string | undefined;
        status?: boolean;

        constructor(params: {
            title: string | undefined;
            desc: string | undefined;
            status?: boolean;
        }) {
            this.title = params.title;
            this.desc = params.desc;
            this.status = params.status;
        }
    }

    const a5 = new ArticleCate5({
        title: '分类',
        desc: '123',
        status: true
    })

    const Db5_2 = new MysqlDb5<ArticleCate5>()
    Db5_2.add(a5);

// 修改 ArticleCate5 表的数据
    const a5_upData = new ArticleCate5({
        title: '分类upData',
        desc: '321'
    })

    a5_upData.status = false;
    const Db5_3 = new MysqlDb5<ArticleCate5>()
    Db5_3.upDated(a5_upData, 0)