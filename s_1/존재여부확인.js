const check = () => {
  let arr1 = ["🍌", "🥝", "🍇"];
  let arr2 = ["🍌", "🍓", "🍇", "🍓"];
  let ans = [];
  arr2.forEach((e) => {
    if (arr1.includes(e)) ans.push(e);
  });
  return ans;
};
console.log(check());
