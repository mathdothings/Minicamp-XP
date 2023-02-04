function calculateIMC() {
  const button = document.querySelector("[type=button]");
  button.onclick = (weight, height) => {
    weight = document.querySelector("#input-weight");
    height = document.querySelector("#input-height");
    const result = document.querySelector("strong");
    result.innerText = (weight.value / height.value ** 2).toFixed(2);
    result.style.color = "teal";
  };
}

calculateIMC();
