document.addEventListener("DOMContentLoaded", () => {
  const puzzleBoard = document.getElementById("puzzle-board");
  const submitBtn = document.getElementById("submit-btn");
  const messageBox = document.getElementById("message-box");
  const shuffleBtn = document.getElementById("shuffle-btn");

  let correctOrder = ["1", "2", "3", "4", "5", "6"]; // Correct order of images
  let currentOrder = [];

  // Shuffle images
  function shufflePieces() {
    let pieces = Array.from(document.getElementsByClassName("piece"));
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach((piece) => puzzleBoard.appendChild(piece));
    messageBox.style.opacity = "0"; // Hide message after shuffle
  }

  // Drag and drop functionality
  let draggedPiece = null;

  document.querySelectorAll(".piece").forEach((piece) => {
    piece.draggable = true;

    piece.addEventListener("dragstart", (e) => {
      draggedPiece = e.target;
    });

    piece.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    piece.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedPiece && e.target.classList.contains("piece")) {
        let tempSrc = draggedPiece.src;
        let tempOrder = draggedPiece.dataset.order;

        draggedPiece.src = e.target.src;
        draggedPiece.dataset.order = e.target.dataset.order;

        e.target.src = tempSrc;
        e.target.dataset.order = tempOrder;
      }
    });
  });

  // Check if puzzle is correct
  function checkPuzzle() {
    currentOrder = Array.from(document.getElementsByClassName("piece")).map(
      (img) => img.dataset.order
    );

    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      messageBox.textContent = "🎉 Congratulations! You solved the puzzle! 🎉";
      messageBox.className = "success";
    } else {
      messageBox.textContent = "❌ Try Again! The puzzle is incorrect.";
      messageBox.className = "fail";
    }

    messageBox.style.opacity = "1";
    messageBox.style.transform = "scale(1)";
  }

  // Event Listeners
  submitBtn.addEventListener("click", checkPuzzle);
  shuffleBtn.addEventListener("click", shufflePieces);

  shufflePieces(); // Shuffle images on load
});
