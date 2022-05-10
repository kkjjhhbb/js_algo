const change = () => {
  const arr = ["🍌", "🍓", "🍇", "🍓"];
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
