const map = new Map([
  ["key1", "๐"],
  ["key2", "๐ฅฉ"],
]);

//์ฌ์ด์ฆ ํ์ธ
console.log(map.size());

//์กด์ฌํ๋์ง ํ์ธ ํค๋ก ํ์ธ
console.log(map.has("key1"));

//์ํ
map.forEach((value, key) => console.log(key, value));

//์ฐพ๊ธฐ
console.log(map.get("key1"));

//์ถ๊ฐ
map.set("key3", "๐");

//์ญ์ 
map.delete("key3");

//์ ๋ถ ์ญ์ 
map.clear();

//map์์๋ []๋ก ์ ๊ทผ ๋ถ๊ฐ๋ฅ object๋ ๊ฐ๋ฅ
//map์ get์ผ๋ก ์ฐพ์์์ผํจ
