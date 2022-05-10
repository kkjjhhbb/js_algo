function solution(str) {
  const string = str.split("");
  return string
    .map((v) => (v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}
console.log(solution("KoreaTimeGood"));
