## 생성자 함수
참고 : [this](https://github.com/Son-Sumin/react-notes/blob/main/Javascript%20Basic/13Javascript%20Basic(%EA%B0%9D%EC%B2%B4(Object)_method%2C%20this).md)
<br>

### 생성자 함수와 객체 리터럴
비슷한 객체 리터럴을 여러 개 만들어야할 때 생성사 함수 활용   
생성자 함수는 관례적으로 첫 글자를 대문자로 표기   
**생성자 함수는 꼭 new와 함께 사용해야 한다!!**
``` Javascript
/* 객체 리터널 */

let user = {
    name : 'Mike',
    age : 30,
}


/* 생성자 함수 */

function User(name, age) {
    this.name = name;
    this.age = age;
}
// new 연산자를 사용하여 함수 호출 (각각 다른 변수명, 값)
let user1 = new User('Mike', 30);   → User {name: "Mike", age: 30}
let user2 = new User('Jane', 22);   → User {name: "Jane", age: 22}
let user3 = new User('Tom', 17);    → User {name: "Tom", age: 17}
```
<br>

- **동작 원리**
``` Javascript
function User(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}

new 함수명();
// 위를 실행하면 함수 블록 내 // 가 있는 것처럼 실행된다.
    (실제 코드로 존재하지 않고 이해를 위해 기재함)
    빈 객체를 생성하여 this에 할당한다.
    함수 본문을 실행하면서 this의 프로퍼티들을 추가한다.
    마지막으로 this를 반환한다.
```
<br>

- 생성자 함수 : 프로퍼티에 메소드 추가
``` Javascript
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }

let user 5 = new User('Han', 40);
user5.sayName();    // 'Han'    → 함수 sayName에서 this.name은 여기서 user5 의미함
}
```
<br>

- 생성자 함수 예시 : 상품 객체를 생성해보자
``` Javascript
funciton Item(title, price){
    // this = {};  (이해용, new 사용시 발생하는 코드)

    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }

    // return this;  (이해용, new 사용시 발생하는 코드용)
}

const item1 = new Item('인형', 3000);
const item2 = Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);
// Item {title: "인형", price: 3000,, showPrice: f}
   Undefined  →  그냥 함수를 실행하는데 반환값이 없으므로 Undefined를 반환하고 그 값이 item2로 들어감
   Item {title: "지갑", price: 9000,, showPrice: f}

item3.showPrice();
// 가격은 9000원 입니다.
```
