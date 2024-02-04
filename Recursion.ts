const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Poiint[]
): boolean {
  // base case 1
  // check whether we are off the row or not
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // base case 2
  // check whether we hit the wall or not
  if (maze[curr.x][curr.y] === wall) return false;
  //   base case 3
  // check whether we are on the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // base case 4
  // check whether we have already been in a point or not
  if (seen[curr.x][curr.y]) return false;

  //   ! 3 recurse steps
  // ? 1. Pre (before the recursion)
  // ? 2. in the recursion
  // ? 3. after the recursion

  //   ! 1. Pre
  seen[curr.x][curr.y] = true;
  path.push(curr);

  // ! 2. Recurse
  for (let i = 0; i < dir.length; ++i) {
    // new current position in each iteration
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path
      )
    ) {
      // if the recursion is done, return true.
      return true;
    }
  }

  // ! 3. Post
  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
    walk(maze, wall, start, end, seen, path);
    return path;
  }
}
