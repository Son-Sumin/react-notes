### 변수(Variable), 호이스팅(Hoisting), TDZ(Temporal Dead Zone)
참고 : [11Javascript Basic(객체(Object)_선언문, 표현식, 화살표함수)](https://github.com/Son-Sumin/react-notes/blob/main/Javascript%20Basic/11Javascript%20Basic(%EA%B0%9D%EC%B2%B4(Object)_%EC%84%A0%EC%96%B8%EB%AC%B8%2C%20%ED%91%9C%ED%98%84%EC%8B%9D%2C%20%ED%99%94%EC%82%B4%ED%91%9C%ED%95%A8%EC%88%98).md)   

#### let const var 비교   
- let const : ES6부터   
  var : ES6 이전부터   
- 대부분의 경우 let과 var는 바꿔서 사용해도 무방하다
- 차이점
  * var : 한 번 선언된 변수를 다시 선언할 수 있다
  * var : 선언하기 전에 사용할 수 있다
  <pre>
  <code>
    /* var는 한 번 선언된 변수를 다시 선언할 수 있다 */

    var name = 'Mike';
    console.log(name);      // Mike

    var name = 'Jane';
    console.log(name);      // Jane


    let name = 'Mike';
    console.log(name);      // Mike

    let name = 'Jane';
    console.log(name);      // error!!
  </code>
  </pre>
  <br>

  <pre>
  <code>
    /* var는 선언하기 전에 사용할 수 있다 */

    console.log(name);      // undefined (에러 아님)
    var name = 'Mike';

    // 사용원리
    // 코드가 실제로 이동하지는 않지만 아래와 같이 실행됨
    // 코드의 모든 함수 선언문을 찾아 생성해 둔다, 즉 해당 함수의 실행 범위는 코드 위치보다 넓다  →  Hoisting
    // 선언은 호이스팅되지만, 할당은 호이스팅되지 않기에 undefined
    var name;               // 호이스팅(hoisting)
    console.log(name);      // undefined (에러 아님)
    name = 'Mike';          // 할당


    // let과 const도 호이스팅 가능하다.
       여기서 에러인 이유는,
       let과 const는 TDZ(Temporal Dead Zone)의 영향을 받는다.
       할당하기 전에는 사용 불가하다.
       이는 코드를 예측하게 하고 잠재적 버그 감소에 효과적이다.
    console.log(name);      // ReferenceError
    let name = 'Mike';
  </code>
  </pre>
  <br>

- **호이스팅(Hoisting)** : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동   
  호이스팅은 스코프 단위로 일어난다   
  
<pre>
<code>
    // 이상 X
    let age = 30;
    function showAge() {
      console.log(age);
    }
    showAge();

     // 이상 O
    let age = 30;
/* TDZ ~
    function showAge() {  
      console.log(age);
      let age = 20;     // 호이스팅 발생시킴
    }
 ~ TDZ */
    showAge();          // 위에서 호이스팅 발생하지 않았다면 정상적으로 30이 출력되야함
  </code>
  </pre>
  <br>

- **변수의 생성과정**
1. 선언 단계   
2. 초기화 단계   
   초기화 : undefined을 할당해주는 단계
3. 할당 단계   
<br>

  * var   
  1. 선언 및 초기화 단계   
     할당 전에 호출하면 에러가 아닌 undefined 출력   
  2. 할당 단계
<br>

  * let   
  1. 선언 단계   
     호이스팅 되면서 선언 단계가 이루어짐   
  2. 초기화 단계   
     실제 코드에 도달했을 때 발생 → 그렇지 않으면 ReferenceError 발생   
  3. 할당 단계   
    <br>

  * const   
  1. 선언 + 초기화 + 할당   
     let과 var는 선언만 하고 나중에 할당이 가능함   
<pre>
<code>
    let name;
    name = 'Mike';

    var age;
    age = 30;

    const gender;
    gender = 'male';    // SyntaxError → 선언하면서 바로 할당 안했기 때문
</code>
</pre>
<br>


- **스코프**
  * var : 함수 스코프(functional-scoped)   
  * let, const : 블록 스코프(block-scoped)   
  <br>

  ```
  블록 스코프는 모든 코드 블록 내에서 선언된 변수(지역변수)는 코드 블록 내에서만 유효하며 외부에서는 접근할 수 없다.   
    ex) 함수, if문, for문, while문, try/catch문 등   

  함수 스코프는 함수 내에서만 선언된 변수가 그 지역변수가 된다.

  /* 예시1 */
  const age = 30;
  
  if(age>19) {
    var txt = '성인';
  }
  console.log(txt);      // 성인  → age 사용 불가


  /* 예시2 */
  function add(num1, num2) {
    var result = num1 + num2;
  }
  add(2,3);
  console.log(result);    // ReferenceError
  ```

**var는 이제 사용하지 않고 let, const 사용 권장함**   
**예측 가능한 결과를 내고 버그를 줄일 수 있다!**   
<br>

### var, let, const 비교    
- var   
  * 한 번 선언된 변수를 다시 선언할 수 있다 (덮어쓰기 가능)   
  * TDZ(Temporal Dead Zone)의 영향받지 않음   
  * 변수의 생성과정 : 선언 및 초기화 → 할당   
    할당 전에 호출하면 에러가 아닌 undefined 출력   
  * 함수 스코프
  
- let   
  * 최초로 사용하는 변수명에 let 붙여 동일한 변수명 사용할 때 에러 발생시킴 (덮어쓰기 불가능)   
  * TDZ(Temporal Dead Zone)의 영향받음   
  * 변수의 생성과정 :  선언 → 초기화 → 할당   
  * 블록 스코프

- const   
  * 절대로 바뀌지 않는 상수, 변경하려 하면 에러 발생   
  * TDZ(Temporal Dead Zone)의 영향받음   
  * 변수의 생성과정 : 선언 + 초기화 + 할당   
  * 블록 스코프
