export function components(
  points: number,
  edges: [number, number][]
): number[][] {
  const visitedPoints = new Set<number>();

  const components: number[][] = [];

  function BFS(i: number) {
    if (visitedPoints.has(i)) return;
    const BFSqueue = [i];
    const component: number[] = [];
    while (BFSqueue.length) {
      const focus = BFSqueue.shift() as number;
      component.push(focus);
      visitedPoints.add(focus);
      for (let edge of edges) {
        if (edge[0] === focus && !visitedPoints.has(edge[1])) {
          BFSqueue.push(edge[1]);
        }
        if (edge[1] === focus && !visitedPoints.has(edge[0])) {
          BFSqueue.push(edge[0]);
        }
      }
    }
    components.push(component);
  }

  for (const connection of edges) {
    BFS(connection[0]);
  }

  for (let i = 1; i < points; i++) {
    if (!visitedPoints.has(i)) {
      components.push([i]);
    }
  }

  console.log(components);
  return components;
}

components(10, [
  [5, 6],
  [4, 5],
  [1, 4],
]);
