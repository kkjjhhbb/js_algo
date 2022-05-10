function solution(str) {
  const set = [...new Set(str)];
  return set.join("");
}

console.log(solution("ksekkset"));
