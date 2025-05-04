// https://coderun.yandex.ru/problem/print-the-route-of-the-maximum-cost

export function maxPathSum(grid: number[][]): { cost: number; trace: string } {
  const height = grid.length,
    width = grid[0].length;
  const state = new Array(height).fill(0).map(() => new Array(width).fill(0));

  state[0][0] = grid[0][0];

  for (let gridrow = height - 1; gridrow >= 0; gridrow--) {
    for (let gridcol = width - 1; gridcol >= 0; gridcol--) {
      state[gridrow][gridcol] =
        grid[gridrow][gridcol] +
        Math.max(
          state[gridrow]?.[gridcol + 1] || 0,
          state[gridrow + 1]?.[gridcol] || 0
        );
    }
  }
  let sum = 0;
  let row = 0;
  let col = 0;
  let trace = "";
  console.log(state);
  while (row < height - 1 || col < width - 1) {
    let nextrow = row;
    let nextcol = col;
    if (row + 1 <= height) {
      if (state[row + 1][col] === state[row][col] - grid[row][col]) {
        nextrow += 1;
        trace += "D";
      }
    }
    if (col + 1 <= width) {
      if (state[row][col + 1] === state[row][col] - grid[row][col]) {
        trace += "R";
        nextcol += 1;
      }
    }
    row = nextrow;
    col = nextcol;
  }
  return { cost: state[0][0], trace };
}

console.log(maxPathSum([[1]]));

console.log(
  maxPathSum([
    [1, 1, 1, 1, 1],
    [3, 100, 100, 100, 100],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ])
);
