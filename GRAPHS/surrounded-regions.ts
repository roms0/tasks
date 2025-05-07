/**
 Do not return anything, modify board in-place instead.
 */

function solve(board: string[][]): void {
  const top = 0;
  const bottom = board.length - 1;
  const left = 0;
  const right = board[0].length - 1;

  function capture(y: number, x: number) {
    const queue = [[y, x]];
    while (queue.length > 0) {
      const cell = queue.shift();
      if (!cell) break;
      const [y, x] = cell;
      if (board[y][x] === "O") {
        board[y][x] = "SO";
        if (board[y + 1]?.[x] === "O") {
          queue.push([y + 1, x]);
        }
        if (board[y]?.[x + 1] === "O") {
          queue.push([y, x + 1]);
        }
        if (board[y]?.[x - 1] === "O") {
          queue.push([y, x - 1]);
        }
        if (board[y - 1]?.[x] === "O") {
          queue.push([y - 1, x]);
        }
      }
    }
  }

  for (let x = left; x <= right; x++) {
    capture(top, x);
  }

  for (let x = left; x <= right; x++) {
    capture(bottom, x);
  }

  for (let y = top; y <= bottom; y++) {
    capture(y, left);
  }

  for (let y = top; y <= bottom; y++) {
    capture(y, right);
  }

  for (let y = top; y <= bottom; y++) {
    for (let x = left; x <= right; x++) {
      if (board[y][x] === "SO") {
        board[y][x] = "O";
      } else {
        board[y][x] = "X";
      }
    }
  }
  console.log(board);
}

solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]);
