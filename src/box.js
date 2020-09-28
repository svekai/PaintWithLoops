import "./styles.css";

export function getBox(color) {
  return { color: color, visible: true };
}

export function render(boxes) {
  if (!Array.isArray(boxes)) {
    return;
  } else if (boxes.length === 0) {
    return;
  } if (Array.isArray(boxes[0])) {
    document.getElementById("app").innerHTML = getTableHTML(boxes);
  } else {
    var string = getTableWithOneRowHTML(boxes);
    document.getElementById("app").innerHTML = string;
  }
}

function getTableWithOneRowHTML(boxes) {
  return '<table class="border table">' + getRowHTML(boxes) + "</table>";
}

function getTableHTML(boxes) {
  var string = '<table class="border table">';
  boxes.forEach(function (boxRow) {
    string += getRowHTML(boxRow);
  });
  string += "</table>";
  return string;
}

function getRowHTML(boxes) {
  return "<tr>" + getHTMLForBoxes(boxes) + "</tr>";
}

function getHTMLForBoxes(boxes) {
  var string = "";
  boxes.forEach((box) => {
    string += getHTMLForBox(box);
  });
  return string;
}

function getHTMLForBox(box) {
  var color = box.visible ? box.color : undefined;
  return '<td class="box border" style="background-color:' + color + '"</td>';
}
