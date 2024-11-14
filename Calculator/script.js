const inputCal = document.getElementById("inputCal");

function addQuery(input) {
  if (inputCal.value == "0") {
    inputCal.value = "";
  }
  inputCal.value += input;
}

function clearInput() {
  inputCal.value = "";
}

function calculate() {
  try {
    inputCal.value = eval(inputCal.value);
  } catch {
    inputCal.value = inputCal.value;
  }
}

function backspace() {
  let str = inputCal.value;
  let len = inputCal.value.length;
  inputCal.value = str.slice(0, len - 1);
}
