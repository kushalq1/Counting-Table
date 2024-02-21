const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

incBtn.onclick = function () {
  countLabel.textContent = count++;
};

decBtn.onclick = function () {
  countLabel.textContent = count--;
};
resetBtn.onclick = function () {
  countLabel.textContent = count * 0;
};
