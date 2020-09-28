import { getBox, render } from "./box.js";

var boxObject1 = getBox("blue");
var boxObject2 = getBox("purple");
makeBoxInVisible(boxObject2);
var boxes = [];
var boxes2 = [];

boxes.push(boxObject1);
boxes.push(boxObject2);
boxes.push(getBox("green"));


var boxObject12 = getBox("blue");
var boxObject22 = getBox("purple");
makeBoxInVisible(boxObject22);
boxes2.push(boxObject12);
boxes2.push(boxObject22);
boxes2.push(getBox("green"));

var boxes2D = [];
boxes2D.push(boxes);
boxes2D.push(boxes2);

render(boxes2D);
callMethodForEveryBoxOneSecondApart(myFunction, boxes2D);

function myFunction(box) {
  changeColorOfBox(box, "red");
}

function callMethodForEveryBoxOneSecondApart(myAwesomeFunction, boxes) {
  var timer = 1000;
  if (!Array.isArray(boxes)) {
    return;
  } else if (boxes.length === 0) {
    return;
  } if (Array.isArray(boxes[0])) {
    boxes.forEach((boxRow) => {
      boxRow.forEach((box) => {
        windowTimeOut(myAwesomeFunction, box, timer, boxes);
        timer += 1000;
      })
    });
  } else {
    boxes.forEach((box) => {
      windowTimeOut(myAwesomeFunction, box, timer, boxes);
      timer += 1000;
    });
  }
}

function windowTimeOut(myFunction, box, timer, boxes) {
      window.setTimeout(function () {
        myFunction(box);
        render(boxes);
      }, timer);
}

function changeColorOfBox(box, color) {
  box.color = color;
}

function boxIsOfColor(box, color) {
  return box.color === color;
}

function makeBoxVisible(box) {
  box.visible = true;
}

function makeBoxInVisible(box) {
  box.visible = false;
}