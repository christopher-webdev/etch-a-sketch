function createGrid(gridSize) {
  const board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  board.innerHTML = "";

  for (let i = 1; i <= gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add(`div-${i}`);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = getRandomColor();
    });
    board.appendChild(div);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const btn = addEventListener("click", () => {
  const gridSize = parseInt(prompt("Enter grid size (1-10):"));
  createGrid(gridSize);
});
