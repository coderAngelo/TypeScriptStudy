// 1. 布尔类型
    let flag: boolean = true;

// 2. 数字类型
    let num: number = 123;

// 3. 字符串类型
    let str: string = 'string';

// 4. 数组类型  多种
    const arr1_1: number[] = [1, 2, 3, 4, 5];
    const arr1_2: string[] = ['a', 'b', 'c'];

    const arr2_1: Array<number> = [1, 2, 3, 4, 5];
    const arr2_2: Array<string> = ['A', 'B', 'C'];

    const arr3: any[] = [1, 'b', 3, 'D'];

// 5. 元组类型（tuple）  属于数组的一种
    const arr: [number, string] = [123, 'abc'];  // 可以根据需求给相应位置的内容定义类型


/**
 * 6. 枚举类型（enum）
 *
 * 随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
 * 例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
 * 在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
 * 如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
 * 也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
 * 这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
 *
 * 示例：
 * enum 枚举名 {
 *     标识符[=整数型常数],
 *     标识符[=整数型常数],
 *     ...
 *     标识符[=整数型常数],
 * };
 *
 * 注意：1. 如果标识符没有赋值，则它的值为下标;
 *      2.
 */

    enum Flag {success, error}

    let s: Flag = Flag.success;
    let e: Flag = Flag.error;

    enum Color {blue, red, 'orange'}

    let r: Color = Color.red;
    let o: Color = Color.orange;

    // console.log(o);

    enum Err {'undefined' = -1, 'null' = -2, 'success' = 1}

    let E: Err = Err.success;
    // console.log(e);

// 7. 任意类型（any）
    let aNum: any = 123;
    aNum = 'str';
    aNum = true;

/**
 * 8. null 和 undefined     是其他类型（never类型）的子类型；
 *
 * 注意，定义没有复制的就是 undefined；
 */


    let uNum: undefined;
    // console.log(uNum);

    let nuNum: number | undefined;
    nuNum = 123;

    let Null: null = null;
    // console.log(Null);

    // 一个元素可能是 undefined类型、 null、 或者number类型；
    let unnNum: number | undefined | null;
    unnNum = 123;
    // console.log(unnNum)

// 9. void类型   TS中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
    function run1_demo01(): void {
        console.log('这是一个run方法')
    }

    // run1_demo01()

    function run2(): number {
        return 123
    }

    // console.log(run2());

// 10. never类型：是其他类型，包括 null 和 undefined 代表不会出现的值

    let a: never;
    a = (() => {
        throw new Error('错误');
    })()