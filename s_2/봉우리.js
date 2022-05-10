function solution(arr, x, y) {
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let nx = 0,
    ny = 0;
  let n = arr.length;
  let m = arr[0].length;
  let flag = 1;
  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (arr[x][y] <= arr[nx][ny]) flag = 0;
    }
  }
  return flag;
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (solution(arr, i, j)) answer += 1;
  }
}
console.log(answer);
