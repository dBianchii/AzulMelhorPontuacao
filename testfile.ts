const map = [
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let y = 0;
let x = 0;
let count = 0;
while (true) {
  if (y >= map.length) {
    y = 0;
    x++;
    if (x >= map[y].length) break;
  }
  map[y][x] = "1"; //mark as visited and count the current one
  count++;

  const horizontalCount = countHorizontally(x, y);
  const verticalCount = countVertically(x, y);
  if (horizontalCount > 0 && verticalCount > 0) count++; //count the current piece again if it has both horizontal and vertical connections
  count += horizontalCount + verticalCount;
  y++;
}
const VERTICALCOMBO = 7;
const HORIZONTALCOMBO = 2;
count += VERTICALCOMBO * map.length + HORIZONTALCOMBO * map[0].length;
const FIVEPIECECOMBO = 5;
count += FIVEPIECECOMBO * 5;

console.log(count);
function countHorizontally(x: number, y: number): number {
  let count = 0;
  let lookLeft = 1;
  let lookRight = 1;
  while (true) {
    if (x - lookLeft < 0) break; //out of bounds
    if (map[y][x - lookLeft] === "1") count++;
    else break;
    lookLeft++;
  }
  while (true) {
    if (x + lookRight > map[y].length) break; //out of bounds
    if (map[y][x + lookRight] === "1") count++;
    else break;
    lookRight++;
  }
  return count;
}

function countVertically(x: number, y: number): number {
  let count = 0;
  let lookUp = 1;
  let lookDown = 1;
  while (true) {
    if (y - lookUp < 0) break; //out of bounds
    if (map[y - lookUp][x] === "1") count++;
    else break;
    lookUp++;
  }
  while (true) {
    if (y + lookDown >= map.length) break; //out of bounds
    if (map[y + lookDown][x] === "1") count++;
    else break;
    lookDown++;
  }
  return count;
}
