// Map
const m = new Map();

m.set("a", "b"); // set(키, 값) : Map에 속성 추가
m.set(3, "c"); // 문자열이 아닌 값을 키로 사용 가능
const d = [];
m.set(d, "e"); // 객체 가능

m.get(d); // get(키) : 속성값 조회
console.log(m.get(d));

m.size; // size : 속성 개수 조회
console.log(m.size);

for (const [k, v] of m) {
  // 반복문에 넣어 사용
  console.log(k, v);
} // 속성 간의 순서 보장

m.forEach((v, k) => {
  console.log(k, v); // 결과는 위와 동일
});

m.has(d); // has(키) : 속성 존재 여부 확인
console.log(m.has(d));

m.delete(d); // delete(키) : 속성 삭제
m.clear(); // clear() : 전부 제거
console.log(m.size);

// Set
const s = new Set(); // add(요소) : Set에 추가
s.add(false);
s.add(1);
s.add("1");
s.add(1); // 중복이므로 무시
s.add(2);

console.log(s.size); // 중복이 제거되어 4

s.has(1); // has(요소) : 요소 존재 여부 확인
console.log(s.has(1));

for (const a of s) {
  console.log(a);
}

s.forEach((a) => {
  console.log(a);
});

s.delete(2); // delete(요소) : 요소 제거
s.clear(); // clear() : 전부 제거
