function generateRandomNumber() {
  const rnd = () => Math.floor(Math.random() * 10);
  const result = [rnd(), rnd(), rnd()];
  console.log(result);
  return result;
}

const results = [];

const button = document.querySelector("button");
button.onclick = () => {
  results.push(generateRandomNumber());
  writeToLocalStorage(results);
  console.log(readFromLocalStorage());
};

function writeToLocalStorage(data) {
  window.localStorage.setItem("save", JSON.stringify(data));
}

function readFromLocalStorage() {
  window.localStorage.getItem("save");
}
