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

// // 通过 interface 语句来定义类型
// interface CallbackFunction {
//   (err: Error | null, data: Buffer): void;
// }
// function readFile(file: string, callback: CallbackFunction) {
//   fs.readFile(file, callback);
// }
//非字面量
const o:object = {a:1,b:'2'};
const o1:Object = new Object({a:1,b:'2'});
//接口定义函数
// 声明接口
interface Core {
  (n:number, s:string):[number,string]
}

// 声明函数遵循接口定义
const core:Core = (a,b)=>{
  return [a,b];
}


//####高级####


//1.类型断言 <> 和 as
let obj1 = 0.5 < Math.random() ? 1 : [1]; // number|number[]

// 断言, 告诉ts, obj为数组
(<number[]>obj1).push(1);

//等价
(obj1 as number[]).push(1);


//2类型别名(type)  类型别名可以表示很多接口表示不了的类型, 比如字面量类型(常用来校验取值范围)
type AA = 'top'|'right'|'bottom'|'left'; // 表示值可能是其中的任意一个


let a1:AA = 'top'; // none错误, A类型中没有'none'

//索引类型(keyof)
type A10 = keyof {a:1,b:'123'} // 'a'|'b'
type B10 = keyof [1,2] // '0'|'1'|'push'... ,获取到内容的同时, 还得到了Array原型上的方法和属性(实战中暂时没遇到这种需求,了解即可)

//映射类型(Readonly, Pick, Record等...)
type A2  = {a:number, b:string}
type A1 = Readonly<A2> // {readonly a: number;readonly b: string;}

//Partial<T>, 让属性都变成可选的。。Required<T>, 让属性都变成必选。
type AAA  = {a:number, b:string}
type A3 = Partial<AAA> // { a?: number; b?: string;}
//Record<K,T>, 创建一个类型,K代表键值的类型, T代表值的类型
type A11 = Record<string, string> // 等价{[k:string]:string}


//extends(条件类型)
type A123 =  string extends '123' ? string :'123' // '123'
type B123 =  '123' extends string ? string :123 // string


//infer(类型推断)
type Para1<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

//3 namespace
//引入<reference path="xxx.ts" />,  还有就是import
//tsconfig中设置了"module": "umd",, 那么export = Food等价于export default Food, export=常见于支持umd的插件的声明文件

//is   \): \w+ is
const isString = (val: any): val is string => typeof val === 'string'
//const isString = (val: any):boolean => typeof val === 'string'
let aa:null |string =Math.random() <0.5?null:'123';
if(isString(aa)){
  aa.substring(0,1)
}

// 是否是对象
export const isObject = (val: any): val is Record<any, any> =>
  val !== null && typeof val === 'object'
//声明文件就是给js代码补充类型标注. 用关键字declare来表示声明其后面的全局变量的类型
//declare namespace  后面的全局变量是一个对象

//安装完typescript, 会自动给我们安装一些系统变量的声明文件, 存在node_modules/typescript/lib下
