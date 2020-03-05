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
