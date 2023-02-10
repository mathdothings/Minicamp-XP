const button = document.querySelector("button");

function getInputValues() {
  const inputs = document.querySelectorAll("input");
  const A = Number(inputs[0].value);
  const B = Number(inputs[1].value);
  return [A, B];
}

button.onclick = calculate;

function calculate() {
  const values = getInputValues();
  const A = values[0];
  const B = values[1];

  // Sum
  const sum = document.querySelector("#sum-value");
  sum.innerText = A + B;

  // A - B
  const sub1 = document.querySelector("#subtraction-value1");
  sub1.innerText = A - B;

  // B - A
  const sub2 = document.querySelector("#subtraction-value2");
  sub2.innerText = B - A;

  // Multiplication
  const mult = document.querySelector("#multiplication-value");
  mult.innerText = A * B;

  // A / B
  const div1 = document.querySelector("#division-value1");
  B === 0 ? (div1.innerText = "") : (div1.innerText = (A / B).toFixed(2));

  // B / A
  const div2 = document.querySelector("#division-value2");
  A === 0 ? (div2.innerText = "") : (div2.innerText = (B / A).toFixed(2));

  // A ** B
  const power1 = document.querySelector("#power-value1");
  power1.innerText = A ** B;

  // B ** A
  const power2 = document.querySelector("#power-value2");
  power2.innerText = B ** A;

  // sqrt(A)
  const sqrt1 = document.querySelector("#square-root-value1");
  sqrt1.innerText = Math.sqrt(A).toFixed(2);

  // sqrt(B)
  const sqrt2 = document.querySelector("#square-root-value2");
  sqrt2.innerText = Math.sqrt(B).toFixed(2);

  // A!
  const fact1 = document.querySelector("#factorial-value1");
  fact1.innerText = factorial(A);

  // B!
  const fact2 = document.querySelector("#factorial-value2");
  fact2.innerText = factorial(B);

  // A % B
  const perct1 = document.querySelector("#percentage-value1");
  perct1.innerText = `${Math.round((B * 100) / A)}%`;

  // B % A
  const perct2 = document.querySelector("#percentage-value2");
  perct2.innerText = `${Math.round((A * 100) / B)}%`;

  // Median
  const median = document.querySelector("#median-value");
  median.innerText = (A + B) / 2;
}

function factorial(number) {
  result = 1;
  for (let x = 1; x <= number; x++) {
    result *= x;
  }

  return result;
}
