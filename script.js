function generateRandom() {
  const number = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number").innerText = number;
}
