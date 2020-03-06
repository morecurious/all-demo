"use strict";
var obj = { a: 123, b: '456' };
var x = ["hello", 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var notSure = 4;
notSure = "maybe a string instead";
var u = undefined;
var n = null;
function error(message) { throw new Error(message); }
var o = { a: 1, b: '2' };
var o1 = new Object({ a: 1, b: '2' });
var core = function (a, b) {
    return [a, b];
};
var obj1 = 0.5 < Math.random() ? 1 : [1];
obj1.push(1);
obj1.push(1);
var a1 = 'top';
//# sourceMappingURL=1.js.map