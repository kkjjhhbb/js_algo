function solution(arr) {
  let str = arr.toUpperCase();
  return str.split('').reverse().join('') === str ? 'YES' : 'NO';
}
console.log(solution('gooG'));
