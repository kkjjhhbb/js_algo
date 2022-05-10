function solution(str) {
  const mid = Math.floor(str.length / 2);
  if (str.length % 2 === 0) return str[mid - 1] + str[mid];
  return str[mid];
}

console.log(solution("study"));
