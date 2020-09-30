import "./styles.css";

function getBox(color) {
  return { color: color, visible: true };
}

export function render(boxes) {
  if (!Array.isArray(boxes)) {
    console.log("Boxes is not array: ", boxes);
    return;
  } else if (boxes.length === 0) {
    console.log("Boxes needs length larger than 0");
    return;
  }
  if (Array.isArray(boxes[0])) {
    console.log("Boxes is matrix: ", boxes);
    document.getElementById("app").innerHTML = getTableHTML(boxes);
  } else {
    console.log("Boxes is array: ", boxes);
    var string = getTableWithOneRowHTML(boxes);
    document.getElementById("app").innerHTML = string;
  }
}

export function createBoxRow(numberOfBoxes) {
  var boxes = [];
  for (var i = 0; i < numberOfBoxes; i++) {
    boxes.push(getBox("white"));
  }
  render(boxes);
  return boxes;
}

export function createBoxMatrix(numberOfBoxes) {
  var boxMatrix = [];
  for (var i = 0; i < numberOfBoxes; i++) {
    var boxes = [];
    for (var j = 0; j < numberOfBoxes; j++) {
      boxes.push(getBox("white"));
    }
    boxMatrix[i] = boxes;
  }
  render(boxMatrix);
  return boxMatrix;
}

function getTableWithOneRowHTML(boxes) {
  return (
    '<table class="border one-row-table">' +
    getRowHTML(boxes, "box") +
    "</table>"
  );
}

function getTableHTML(boxes) {
  var string = '<table class="border table">';
  boxes.forEach(function (boxRow) {
    string += getRowHTML(boxRow);
  });
  string += "</table>";
  return string;
}

function getRowHTML(boxes, boxClass) {
  return "<tr>" + getHTMLForBoxes(boxes, boxClass) + "</tr>";
}

function getHTMLForBoxes(boxes, boxClass) {
  var string = "";
  boxes.forEach((box) => {
    string += getHTMLForBox(box, boxClass);
  });
  return string;
}

function getHTMLForBox(box, boxClass) {
  var color = box.visible ? box.color : undefined;
  return (
    '<td class="' +
    boxClass +
    ' border" style="background-color:' +
    color +
    '"</td>'
  );
}

export function callMethodForEveryBoxOneSecondApart(myAwesomeFunction, boxes) {
  var timer = 1000;
  if (!Array.isArray(boxes)) {
    return;
  } else if (boxes.length === 0) {
    return;
  }
  if (Array.isArray(boxes[0])) {
    boxes.forEach((boxRow) => {
      boxRow.forEach((box) => {
        windowTimeOut(myAwesomeFunction, box, timer, boxes);
        timer += 1000;
      });
    });
  } else {
    boxes.forEach((box) => {
      windowTimeOut(myAwesomeFunction, box, timer, boxes);
      timer += 1000;
    });
  }
}

export function callMethodInXMilliSeconds(
  myAwesomeFunction,
  boxes,
  milliSeconds
) {
  window.setTimeout(function () {
    myAwesomeFunction(boxes);
    render(boxes);
  }, milliSeconds);
}

function windowTimeOut(myFunction, box, timer, boxes) {
  window.setTimeout(function () {
    myFunction(box);
    render(boxes);
  }, timer);
}

export function callMethodToRenderOneSecondApartWithCondition(
  method,
  method2,
  conditionMethod,
  boxes
) {
  var timer = 1000;
  if (!Array.isArray(boxes)) {
    return;
  } else if (boxes.length === 0) {
    return;
  }
  if (Array.isArray(boxes[0])) {
    for (var i = 0; i < boxes.length; i++) {
      for (var j = 0; j < boxes[i].length; j++) {
        if (conditionMethod(i, j, boxes)) {
          windowTimeOut(method, boxes[i][j], timer, boxes);
          timer += 100;
        } else {
          windowTimeOut(method2, boxes[i][j], timer, boxes);
          timer += 100;
        }
      }
    }
  } else {
    for (var k = 0; k < boxes.length; k++) {
      if (conditionMethod(k, boxes)) {
        windowTimeOut(method, boxes[k], timer, boxes);
        timer += 1000;
      }
    }
  }
}
