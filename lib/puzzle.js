const button = document.getElementById("show-hint");
const hint = document.querySelector(".hint");

button.addEventListener("click", () => {
  hint.classList.toggle("active");
});

const tiles = document.querySelectorAll(".board-game td");
const emptyTile = document.querySelector(".empty");
tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    if (canMove(tile)) {
      swapTile(tile);
    }
  });
});

const canMove = clickedTile => {
  // GET THE EMPTY TILE FROM THE DOM:
  const emptyTile = document.querySelector(".empty");

  clickedTileXPosition = clickedTile.cellIndex;
  clickedTileYPosition = clickedTile.parentElement.rowIndex;

  emptyTileXPosition = emptyTile.cellIndex;
  emptyTileYPosition = emptyTile.parentElement.rowIndex;

  return (
    // is the tile on the same colum (X axis) ?
    (clickedTileXPosition == emptyTileXPosition &&
      // Is the empty tile down from the clicked tile?
      (clickedTileYPosition == emptyTileYPosition + 1 ||
        // Is the empty tile up from the clicked tile?
        clickedTileYPosition == emptyTileYPosition - 1)) ||
    // Is the clicked tile on the same row (Y axis) ?
    (clickedTileYPosition == emptyTileYPosition &&
      // Is it to the right?
      (clickedTileXPosition == emptyTileXPosition + 1 ||
        // Is it to the left?
        clickedTileXPosition == emptyTileXPosition - 1))
  );
};

const swapTile = clickedTile => {
  empty = document.querySelector(".empty");
  empty.classList.remove("empty");
  clickedTile.classList.add("empty");
  empty.innerText = clickedTile.innerText;
  clickedTile.innerText = "";
};
