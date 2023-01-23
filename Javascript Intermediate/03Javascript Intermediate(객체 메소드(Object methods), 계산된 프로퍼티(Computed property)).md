## 객체 메소드(Object methods), 계산된 프로퍼티(Computed property)

### Computed property   
```
let a = 'age';

const user = {
    name : 'Mike',
    [a] : 30,       // age : 30 과 동일  →  Computed property
}

// 객체에 식 자체를 넣는 것도 가능
const user1 = {
    [1 + 4] : 5,
    ["안녕" + "하세요"] : "Hello"
    // user1 {5: 5, 안녕하세요: "Hello"}
}
```

### Object methods   
Object.assign() : 객체 복제   
Object.keys() : 키 배열 반환   
Object.values() : 값 배열 반환   
Object.entries() : 키, 값 배열 반환 (배열 안에 배열로 출력)   
Object.fromEntries() : 키, 값 배열을 객체로 반환   
<br>

- Object.assign() : 객체 복제   
  * Object.assign(담을 객체, 병합시킬 객체1, 병합시킬 객체2, ...)   
  * 기존에 추가, 덮어쓰기, 여러 개 병합 가능   
```
const user = {
    name : 'Mike',
    age : 30
}


// { name : 'Mike', age : 30 }을 user와 cloneUser 2개로 접근 가능한 것이지 복제한 것이 아니다!
// const cloneUser = user;      ('user'라는 참조값만 복사)



/* 예시1 : 초기값 {} */

const newUser = Object.assign({}, user);
// {} + { name : 'Mike', age : 30 } = { name : 'Mike', age : 30 }

newUser.name = 'Tom';
console.log(user.name);     // 'Mike'
// newUser != user


/* 예시2 : 기존에 추가, 덮어쓰기, 여러 개 병합 */

Object.assign({ gender:'male' }, user);
// { gender:'male', name : 'Mike', age : 30 }

Object.assign({ name : 'Tom' }, user);
// { name : 'Tom', age : 30 }

const info1 = {
    gender : 'male'
}
const info2 = {
    hobby : 'studying'
}
Object.assign(user, info1, info2);
// { name : 'Mike', age : 30, gender : 'male', hobby : 'studying'}
```
<br>

- Object.keys() : 키 배열 반환    
- Object.values() : 값 배열 반환   
- Object.entries() : 키, 값 배열 반환 (배열 안에 배열로 출력)
- Object.fromEntries() : 키, 값 배열을 객체로 반환
  * Object.keys(객체), Object.values(객체), Object.entries(객체), Object.fromEntries(객체)   
```
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.keys(user);       // ["name", "age", "gender"]
Object.values(user);     // ["Mike", 30, "male"]
Object.entries(user);    // ["name", "Mike"], ["age", 30], ["gender", "male"] (배열 안에 3개의 배열로 출력 )


const arr = [
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
];
Object.fromEntries(user);  // { name : 'Mike', age : 30, gender : 'male', }
```
<br>

- 예제로 배워보기(Computed property)   
```
let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5, 
};

console.log(user);              // {5: 5, name: "Mike", age: 30}
```
```
function makeObj(key, val) {
    return {
        [key]: val
    }
}
const obj = makeObj('나이', 33);
console.log(obj);               // {나이: 33}
```
<br>

- 예제로 배워보기(Object methods)   
```
// 복제가 아니라 참조값 복사 
const user = {
    name: "Mike",
    age: 30,
}

const user2 = user;
user2.name = "Tom";

console.log(user);       // {name: "Tom", age: 30}
console.log(user2);      // {name: "Tom", age: 30}
```

```
const user = {
    name: "Mike",
    age: 30,
}

/* 복제 */
const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);       // {name: "Mike", age: 30}
console.log(user2);      // {name: "Tom", age: 30}

/* 키 배열 반환 */
const result = Object.keys(user);
console.log(result);     // ["name", "age"]

/* 값 배열 반환 */
const result = Object.valuse(user);
console.log(result);     // ["Mike", 30]

/* 키, 값 배열 반환 */
const result = Object.entries(user);
console.log(result);     // [["name", "Mike"], ["age", 30]]

/* 키, 값 배열을 객체로 반환 */
let arr = [
    ['mon', '월'],
    ['tue', '화']
]
const result = Object.fromEntries(arr);
console.log(result);     // {mon: "월", tue: "화"}
```
