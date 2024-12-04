const depositInput = document.getElementById("deposit");
const termSelect = document.getElementById("term");
const rateInput = document.getElementById("rate");
const wasSpan = document.getElementById("was");
const willSpan = document.getElementById("will");
const barOld = document.querySelector(".old");
const barNew = document.querySelector(".new");
const barOldLabel = barOld.querySelector(".bar-label");
const barNewLabel = barNew.querySelector(".bar-label");

function calculate() {
  const deposit = parseFloat(depositInput.value);
  const term = parseInt(termSelect.value);
  const rate = parseFloat(rateInput.value) / 100;

  const newAmount = deposit * Math.pow(1 + rate / 12, term);
  const roundedNewAmount = Math.round(newAmount);

  wasSpan.textContent = deposit;
  willSpan.textContent = roundedNewAmount;

  barOld.style.height = "100px";
  barNew.style.height = `${(roundedNewAmount / deposit) * 100}px`;

  barOldLabel.textContent = deposit;
  barNewLabel.textContent = roundedNewAmount;
}

depositInput.addEventListener("input", calculate);
termSelect.addEventListener("change", calculate);
rateInput.addEventListener("input", calculate);

calculate();

const gridContainer = document.getElementById("grid");
const selectedCountSpan = document.getElementById("selected-count");
const selectedSumSpan = document.getElementById("selected-sum");

const totalBlocks = 12;
let selectedBlocks = [];

for (let i = 1; i <= totalBlocks; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  block.textContent = i;
  block.dataset.value = i;
  gridContainer.appendChild(block);

  block.addEventListener("click", () => {
    const value = parseInt(block.dataset.value);

    if (block.classList.contains("selected")) {
      block.classList.remove("selected");
      selectedBlocks = selectedBlocks.filter((val) => val !== value);
    } else {
      block.classList.add("selected");
      selectedBlocks.push(value);
    }

    // Обновляем количество и сумму
    selectedCountSpan.textContent = selectedBlocks.length;
    selectedSumSpan.textContent = selectedBlocks.reduce(
      (sum, val) => sum + val,
      0
    );
  });
}
