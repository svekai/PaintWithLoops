import {
  render,
  callMethodForEveryBoxOneSecondApart,
  saratestar,
  createBoxRow,
  createBoxMatrix,
  sleep
} from "./renderUtils.js";
import {
  changeColorOfBox,
  boxIsOfColor,
  makeBoxVisible,
  makeBoxInVisible
} from "./boxUtils.js";

//Uncomment this if you want a single row to be shown
var boxes = createBoxRow(10);

//Uncomment this if you want a matrix to be shown
//var boxes = createBoxMatrix(10);

//Uncomment this to see an ugly example.
//for (var i = 0; i < boxes.length; i++) {
//  for (var j = 0; j < boxes[i].length; j++) {
//    if (
//      ((i === 2 || i === 3) && j > 1 && j < 8) ||
//      (i > 1 && i < 8 && j > 3 && j < 6)
//    ) {
//      changeColorOfBox(boxes[i][j], "green");
//    } else {
//      changeColorOfBox(boxes[i][j], "lightpink");
//    }
//  }
//}

render(boxes);

//This can be used as more advanced examples
//callMethodForEveryBoxOneSecondApart(myFunction, boxes2D);
//callMethodToRender1SecondApartWithCondition(myFunction, myFunction2, myConditions, boxes);

//function myFunction(box) {
//  changeColorOfBox(box, "darkblue");
//}

//function myFunction2(box) {
//  changeColorOfBox(box, "lightpink");
//}

//function myConditions(i, j, boxes) {
//  return (
//    ((i === 2 || i === 3) && j > 1 && j < 8) ||
//    (i > 1 && i < 8 && j > 3 && j < 6)
//  );
//}
