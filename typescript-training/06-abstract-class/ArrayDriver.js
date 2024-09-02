"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
var thaShapes = [];
thaShapes.push(myCircle);
thaShapes.push(myRectangle);
for (var _i = 0, thaShapes_1 = thaShapes; _i < thaShapes_1.length; _i++) {
    var tempShape = thaShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
