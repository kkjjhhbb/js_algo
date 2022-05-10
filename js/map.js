const map = new Map([
  ["key1", "🍅"],
  ["key2", "🥩"],
]);

//사이즈 확인
console.log(map.size());

//존재하는지 확인 키로 확인
console.log(map.has("key1"));

//순회
map.forEach((value, key) => console.log(key, value));

//찾기
console.log(map.get("key1"));

//추가
map.set("key3", "🍔");

//삭제
map.delete("key3");

//전부 삭제
map.clear();

//map에서는 []로 접근 불가능 object는 가능
//map은 get으로 찾아와야함
