function solution(str) {
  const arr = str.map((v) => v.length);
  const max = Math.max(...arr);
  const where = arr.indexOf(max);
  return str[where];
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
