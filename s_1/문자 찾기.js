function solution(str, alp) {
  const arr = str.split("").map((v) => parseInt(v));
  return arr.filter((v) => v === alp).length;
}
console.log(solution("12345", 1));
