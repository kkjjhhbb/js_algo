const count = () => {
  const arr = ["🍌", "🥝", "🍇", "🥝"];
  let ans = 0;
  arr.forEach(function (v, i) {
    if (v === "🥝") {
      ans += 1;
    }
  });
  return ans;
};

console.log(count());
