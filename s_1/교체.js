const arr = ["🍌", "🍓", "🍇", "🍓"];
const change = () => {
  const ans = [];
  arr.forEach(function (v, i) {
    if (v !== "🍓") {
      ans.push(v);
    } else {
      ans.push("🥝");
    }
  });
  return ans;
};
console.log(change());
function replace(array, from, to) {
  const domap = arr.map((value) => (item === from ? to : item));
}

console.log(domap);
