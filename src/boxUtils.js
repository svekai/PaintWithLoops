//Here you can see some examples of colors to choose
//https://www.quackit.com/css/css_color_codes.cfm
export function changeColorOfBox(box, color) {
  box.color = color;
}

export function boxIsOfColor(box, color) {
  return box.color === color;
}

export function makeBoxVisible(box) {
  box.visible = true;
}

export function makeBoxInVisible(box) {
  box.visible = false;
}
