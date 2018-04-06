var box = document.getElementById("display");

function show(x) {
  box.value += x;
  if (x === "c") {
    box.value = "";
  }
}

function equal() {
  var x = eval(box.value);
  box.value = x;
}

function backspace() {
  x = box.value;
  box.value = x.substring(0, x.length - 1);
}

function squared() {
  var x = box.value;
  x *= x;
  box.value = x;
}