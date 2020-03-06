interface A {
    a: number;
    b: string;
}
declare let obj: A;
declare let x: [string, number];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let c: Color;
declare let notSure: any;
declare let u: undefined;
declare let n: null;
declare function error(message: string): never;
interface Point {
    readonly x: number;
    readonly y: number;
}
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
interface SearchFunc {
    (source: string, subString: string): boolean;
}
declare const o: object;
declare const o1: Object;
interface Core {
    (n: number, s: string): [number, string];
}
declare const core: Core;
declare let obj1: number | number[];
declare type A1 = 'top' | 'right' | 'bottom' | 'left';
declare let a1: A1;
