function solution(str) {
  const string = str.split("");
  return string.filter((v) => v.toUpperCase() === v).length;
}
console.log(solution("KoreaTimeGood"));
