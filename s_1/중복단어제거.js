function solution(str) {
  const set = [...new Set(str)];
  set.forEach((v) => console.log(v));
  return;
}

let str = ["good", "time", "good", "time", "student"];
solution(str);
