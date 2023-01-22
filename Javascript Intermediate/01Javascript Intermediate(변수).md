### 변수(Variable)
참고 : [11Javascript Basic(객체(Object)_선언문, 표현식, 화살표함수)](https://github.com/Son-Sumin/react-notes/blob/main/Javascript%20Basic/11Javascript%20Basic(%EA%B0%9D%EC%B2%B4(Object)_%EC%84%A0%EC%96%B8%EB%AC%B8%2C%20%ED%91%9C%ED%98%84%EC%8B%9D%2C%20%ED%99%94%EC%82%B4%ED%91%9C%ED%95%A8%EC%88%98).md)
#### let const var 비교   
- let const : ES6부터   
  var : ES6 이전   
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


    /* var는 선언하기 전에 사용할 수 있다 */
    console.log(name);      // undefined (에러 아님)
    var name = 'Mike';

    // 사용원리
    // 코드가 실제로 이동하지는 않지만 아래와 같이 실행됨
    // 코드의 모든 함수 선언문을 찾아 생성해 둔다, 즉 해당 함수의 실행 범위는 코드 위치보다 넓다  →  Hoisting
    var name;               // 호이스팅(hoisting)
    console.log(name);      // undefined (에러 아님)
    name = 'Mike';


  </code>
  </pre>
  <br>