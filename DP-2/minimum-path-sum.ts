function minPathSum(grid: number[][]): number {
  const height = grid.length,
    width = grid[0].length;
  if (height === 1 && width === 1) {
    return grid[0][0];
  }
  const state = new Array(height).fill(0).map(() => new Array(width).fill(0));

  for (let c = 0; c < width; c++) {
    state[0][c] = grid[0][c] + (state[0]?.[c - 1] || 0);
  }

  for (let r = 0; r < height; r++) {
    state[r][0] = grid[r][0] + (state[r - 1]?.[0] || 0);
  }

  for (let gridrow = 1; gridrow < height; gridrow++) {
    for (let gridcol = 1; gridcol < width; gridcol++) {
      state[gridrow][gridcol] =
        grid[gridrow][gridcol] +
        Math.min(state[gridrow][gridcol - 1], state[gridrow - 1][gridcol]);
    }
  }
  return state[height - 1][width - 1];
}

console.log(minPathSum([[1]]));

console.log(
  minPathSum([
    [1, 1, 1, 1, 1],
    [3, 100, 100, 100, 100],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ])
);
