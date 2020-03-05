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
function readFile(file, callback) {
    fs.readFile(file, callback);
}
//# sourceMappingURL=1.js.map