export function maximalSquare(matrix: string[][]): number {
  const height = matrix.length;
  const width = matrix[0].length;
  const state: number[][] = new Array(height)
    .fill(0)
    .map(() => new Array(width).fill(0));
  let side = 0;
  for (let gridrow = height - 1; gridrow >= 0; gridrow--) {
    for (let gridcol = width - 1; gridcol >= 0; gridcol--) {
      if (matrix[gridrow][gridcol] === "0") {
        state[gridrow][gridcol] = 0;
      } else {
        state[gridrow][gridcol] =
          Math.min(
            state[gridrow + 1]?.[gridcol] || 0,
            state[gridrow]?.[gridcol + 1] || 0,
            state[gridrow + 1]?.[gridcol + 1] || 0
          ) + 1;
        side = Math.max(side, state[gridrow][gridcol]);
      }
    }
  }
  return side ** 2;
}

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
