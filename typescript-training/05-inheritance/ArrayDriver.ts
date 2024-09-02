import { Shape } from "./shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

let thaShapes : Shape[] = [];
thaShapes.push(myShape);
thaShapes.push(myCircle);
thaShapes.push(myRectangle);

for( let tempShape of thaShapes){
    console.log(tempShape.getInfo());
}
