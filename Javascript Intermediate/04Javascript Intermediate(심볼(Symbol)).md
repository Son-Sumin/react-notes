## 심볼(Symbol)

### property key : 문자형, Symbol
```
/* property key : 문자형 */

const obj = {
    1: '1입니다',
    false: '거짓'
};
Object.keys(obj);       // ["1", "false"]
obj['1'];               // "1입니다."
obj['false'];           // "거짓"
```

```
/* Symbol */
// 유일한 식별자를 만들 때 사용
// new를 붙이지 않는다!!

const a = Symbol();
const b = Symbol();
console.log(a);         // Symbol()
console.log(b);         // Symbol()
// 일치연산자  a === b;  →  false 
// 동등연산자  a == b;   →  false 
```

```
/* Symbol :유일성 보장, 전체 코드 중 딱 하나 */
// ( ) 설명 부여 가능, Symbol 생성 간 영향 미치지 않음

const id = Symbol('id');
const id2 = Symbol('id');
console.log(id);          // Symbol(id)
console.log(id2);         // Symbol(id)
// 일치연산자  id === id2;  →  false 
// 동등연산자  id == id2;   →  false 
```

```
/* property key : 심볼형 */

const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid',   →  Computed property
};
console.log(user);      // {name : "Mike", age : 30, Symbol(id) : "myid"}
console.log(user[id]);  // "myid"

// 다음과 같은 메소드와 for..in문은 키가 심볼형인 프로퍼티를 건너뛴다
Object.keys(user);      // ["name", "age"]
Object.values(user);      // ["Mike", 30]
Object.entries(user);      // [["name", "Mike"], ["age", 30]]
for(let a in user){}

// 그럼 Symbol()을 어디서 사용할까?
   특정 객체에 원본 데이터는 건드리지 않고 속성을 추가할 수 있다.
   타인이 만든 객체에 자신만의 속성을 추가하여 덮어쓰면 안된다.
   덮어쓰는 것을 피하기 위해 엄청 길고 이상한 네임핑을 하는 것도 맞지 않다.
   만약 원본 객체가 Object.keys 또는 for..in문로 순회하면서 데이터를 사용하고 있을 수도 있는데 이때 내가 추가한 프로퍼티가 어디서, 어떻게 출력될지 예측 불가하다.
```
<br>

- **Symbol.for()** : 전역 심볼   
  Symbol() 은 이름이 같아도 모두 다른 존재이다.   
  Symbol.for()은 전역변수처럼 이름이 같으면 같은 것을 가리킨다.   
  * 없으면 만들고, 있으면 가져오기 때문에 하나의 심볼만 보장받을 수 있음   
  * Symbol 메소드는 매번 다른 Symbol 값을 생성   
  * Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유   
  * Symbol.keyFor() : 전역 심볼의 이름을 얻고 싶을 때 사용   
  * description : 심볼의 이름을 얻고 싶을 때 사용   
```
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
// 일치연산자  id === id2;  →  true 


// Symbol.keyFor() : 전역 심볼의 이름을 얻고 싶을 때 사용
Symbol.keyFor(id1)      // "id" 


// description : 심볼의 이름을 얻고 싶을 때 사용
const id = Symbol('id 입니다.');
id.description;         // "id 입니다."
```
<br>

- 숨겨진 Symbol key 보는 법 (잘 사용하지 않음)   
  * Symbol 을 완전히 숨길 수 있는 방법은 없다   
  * Object.getOwnPropertySymbols() : Symbol들만 볼 수 있음   
  * Reflect.ownKeys() : 심볼형 키 포함한 객체의 모든 키 확인 
```
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid',
};
Object.getOwnPropertySymbols(user);     // [Symbol(id)]
Reflect.ownKeys(user);                  // ["name", "age", Symbol(id)]
```
<br>

- 예제로 배워보기   
```
// 다른 개발자가 만들어 놓은 객체
const user = {
    name : 'Mike',
    age : 30,
};


// 내가 작업
// user.showName = function () {};
const showName = Symbol("show name");
user[showName] = function () {
    console.log(this.name);
};
user[showName]();


// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
  // 출력 내용
     Mike
     His name is Mike.
     His age is 30.
  // His showName is function () {}.
  // for..in문은 심볼형 프로퍼티는 건너뜀



/* Symbol을 쓰는 장점 */

내가 작업한 메소드도 잘 나오고, 다른 개발자가 만든 코드에도 영향을 미치지 않는 선에서 메소드를 추가했다.
원래 user에 showName이라는 프로퍼티가 존재했는지 고민할 필요 없고, 다른 사람이 만든 프로퍼티를 덮어 쓸 일도 없다.

```
<br>
