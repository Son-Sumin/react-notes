## 숫자, 수학 method (Number, Math)
해당 chapter에서 배우는 내용   
- toString(), toString(2)   
- Math.PI, Math.ceil(), Math.floor(), Math.round()   
- toFixed(), isNaN()   
- parseInt(), parseFloat()   
- Math.max(), Math.min(), Math.abs(), Math.pow(n, m), Math.sqrt()   

### Number method
- toString()   
  * 숫자를 문자로 바꿔주는 메소드   
  * 10진수 → 2진수 toString(2) / 16진수 toString(16)   
  ```
  let num = 10;
  let num2 = 10;

  num.toString();       // "10"
  num.toString(2);      // "1010"
  num2.toString(16);    // "ff"
  ```
  <br>

### Math   
Javascript에는 수학과 관련된 프로퍼티와 메소드를 갖고 있는 Math라는 내장 객체는 갖고 있다
  * Math.PI : 원주율 구하기
  * Math.ceil() : 올림   
  * Math.floor() : 내림   
  * Math.round() : 반올림    
```
Math.PI;                // 3.141592653589793


let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1);        // 6
Math.ceil(num2);        // 6

Math.floor(num1);       // 5
Math.floor(num2);       // 5

Math.round(num1);       // 5
Math.round(num2);       // 6
```
<br>

- toFixed() : 소수점 자릿수 표현   
  * 주의사항 : toFixed() 은 문자열을 반환한다!   
  * Number(userRate.toFixed(2)); 와 같이 숫자로 반환하여 많이 사용함   

```
// 요구사항 : 소수점 둘째 자리까지 표현(셋째 자리에서 반올림)

let userRate = 30.1234;
Math.round(userRate*100)/100;   // 30.12

let userRate = 30.1234;
userRate.toFixed(2);            // "30.12"
userRate.toFixed(0);            // "30"
userRate.toFixed(6);            // "30.123400"

Number(userRate.toFixed(2));    // 30.12
```
<br>

- isNaN() : NaN 인지 아닌지 판단해줌   
  * 특이사항 : isNaN 만이 NaN 판별 가능한 유일한 방법   
```
let x = Number('x');    // NaN
x == NaN;               // false
x === NaN;              // false
NaN == NaN;             // false

isNaN(x);               // true
isNaN(3);               // false
```
<br>

- parseInt() : 문자열을 숫자로 바꿔줌   
  * Number와 다른점 : 숫자와 문자가 혼용되어 있어도 동작함   
  * parseInt는 읽을 수 있는 부분까지 읽고 문자가 나오면 숫자를 반환함   
  * parseInt는 숫자로 시작하지 않으면 NaN 반환함   
  * parseInt는 2번째 인수로 진수 지정 가능함 (2번째 인수에서 10진수로)   
  * parseInt는 소수점 이하는 무시하고, 정수만 반환함
```
let margin = '10px';
parseInt(margin);       // 10
Number(margin);         // NaN

let redColor = 'f3';
parseInt(redColor);         // NaN
parseInt(redColor, 16);     // 243

parseInt('11', 2);          // 3
                            // 문자열 '11'을 숫자 11로 바꾸고, 11(2)에서 3으로 반환
```
<br>

- parseFloat() : parseInt와 동일하게 동작하지만 부동소수점을 반환함   
```
let padding = '18.5%';
parseInt(padding);      // 18
parseFloat(padding);    // 18.5
```
<br>

- Math.random() : 0 ~ 1 사이 무작위 숫자 생성
```
Math.random();      // 0.24581574832
Math.random();      // 0.89608906173

// 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면?
   식을 만들어야한다!
Math.floor(Math.random()*100)+1;
// *100  →  1 ~ 5 사이 임의의 숫자를 뽑는 것이었으면 *5
// +1  →  Math.random() = 0.0~ 임을 대비함. 지금은 1 ~ 100 사이 임의의 숫자를 뽑는 것이니 Math.floor()시 0 나오는 것 방지함
```
<br>

- Math.max(), Math.min() : 최대값, 최소값   
- Math.abs() : 절대값   
- Math.pow(n, m) : 제곱   
- Math.sqrt() : 제곱근   
```
Math.max(1, 4, -1, 5, 10, 9, 5,54);     // 10 
Math.min(1, 4, -1, 5, 10, 9, 5,54);     // -1
Math.abs(-1);       // 1
Math.pow(2, 10);    // 1024
Math.sqrt(16);      // 4
```
<br>
