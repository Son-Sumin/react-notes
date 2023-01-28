### 객체(Object)

#### 함수 선언문 (10 함수에서 학습함)   
``` Javascript
sayHello();     // 실행 가능

function sayHello() {
    console.log('Hello');
}
sayHello();     // 실행 가능
```
<br>

#### 함수 표현식   
이름이 없는 함수를 만들고, 변수를 선언하여 함수 할당함   
함수 사용 전 함수 선언부터 해야함
``` Javascript
let sayHello = function() {
    console.log('Hello');
}
sayHello();
```
<br>

#### 함수 선언문 vs 함수 표현식   
- 사용방식, 실행방식, 동작방식 모두 동일
- 차이점
   * 작성하는 문법
   * **호출할 수 있는 타이밍 : 함수 선언문(어디서든 호출 가능), 함수 표현식(코드에 도달하면 생성)**   
     Javascript는 위에서부터 한 줄 씩 실행함   
     이처럼 순차적으로 실행되고 즉시 결과를 반환하는 프로그래밍 언어  →  Interpreted language   
     Javascript 내부 알고리즘에 의해 위 함수 선언문 예시가 실행됨   
     코드의 모든 함수 선언문을 찾아 생성해 둔다, 즉 해당 함수의 실행 범위는 코드 위치보다 넓다  →  Hoisting   
     참고) 호이스팅(Hoisting) : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동   

#### 함수 선언문과 함수 표현식 중 무엇을 사용해야할까
 대부분 상관없이 사용한다. 에러 발생하면 위로 옮기면 된다.    
 더 자유롭고 편하게 코딩하려면 **함수 선언문 추천**   
<br>

#### 화살표 함수(arrow function)
``` Javascript
let add = function(num1, num2) {
    return num1 + num2;
}

* return문은 ( )로 표현 가능
* 한 줄이면 ( ) 생략 가능
let add = (num1, num2) => num1 + num2;

* 인수가 하나면 ( ) 생략 가능
* 인수가 없으면  ( ) 생략 불가능
let sayHello = name => `Hello, ${name}`;
let showError = () => {
    alert('error!');
}

* return문이 있어도 return 전에 여러 줄의 코드가 있으면 ( ) 사용 불가
let add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
```
<br>

#### 함수 선언문, 함수 표현식, 화살표 함수
``` Javascript
// 함수 선언문 //
showError();    // 실행 가능
function showError() {
    console.log('error');
}


// 함수 표현식 //
showError();    // 에러
let showError = function() {
    console.log('error');
}


// 화살표 함수1 //
let showError = () => {
    console.log('error')
}


// 화살표 함수2 //
sonst sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg)
}


// 화살표 함수3 //
const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}

const add = (num1, num2) => num1 + num2;
```
<br>
