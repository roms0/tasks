function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const height = obstacleGrid.length,
    width = obstacleGrid[0].length;
  const state = new Array(height).fill(0).map(() => new Array(width).fill(0));
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (row == 0 && col == 0) {
        state[row][col] = 1;
        continue;
      }
      if (obstacleGrid[row][col] === 1) {
        state[row][col] = 0;
      } else {
        state[row][col] =
          (state[row - 1]?.[col] || 0) + (state[row]?.[col - 1] || 0);
      }
    }
  }

  return state[height - 1][width - 1];
}

console.log(uniquePathsWithObstacles([[0]]));

console.log(uniquePathsWithObstacles([[1]]));

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
