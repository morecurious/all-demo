interface A {
  a:number,
  b:string
}
// 错误, 会提示b的类型错误, 应该为string类型
let obj:A = {a:123,b:'456'};

//元组类型
let x: [ string, number ] = [ "hello", 10 ]

//枚举类型，如
enum Color { Red, Green, Blue };
let c: Color = Color.Green
//any为任意类型，如
let notSure: any = 4; notSure = "maybe a string instead"
let u: undefined = undefined;
let n: null = null;

//never表示没有值的类型，如
function error(message: string): never { throw new Error(message); }
//多种类型(联合类型（Union Types）)可以用|隔开，比如number | string表示可以是number或string类型

// readonly 表示只读，不能对其属性进行重新赋值
interface Point {
  readonly x: number;
  readonly y: number;
}

// ?表示属性是可选的，可选属性的含义是该属性可以不存在。仍然不允许添加未定义的属性。
// [propName: string]: any 表示允许 obj[xxx] 这样的动态属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 使用 [propName: string] 定义了任意属性取 string 类型的值。
}

// 函数接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// // 函数参数
// function readFile(file: string, callback: (err: Error | null, data: Buffer) => void) {
//   fs.readFile(file, callback);
// }

// // 通过 type 语句定义类型
// type CallbackFunction = (err: Error | null, data: Buffer) => void;
// function readFile(file: string, callback: CallbackFunction) {
//   fs.readFile(file, callback);
// }

// 通过 interface 语句来定义类型
interface CallbackFunction {
  (err: Error | null, data: Buffer): void;
}
function readFile(file: string, callback: CallbackFunction) {
  fs.readFile(file, callback);
}
