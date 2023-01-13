### 변수

- 변수 : 어떤 정보에 이름을 붙여 저장   
  ex. name = "Mike";   
  (문자는 ""로 감싸기)   
  *주의 → 'class'는 Reserved Words로서 변수명으로 사용 불가*   
  <br>

  * 동일 이름의 변수명은 가장 마지막에 정의된 내용으로 덮어 쓰여짐   
    위를 방지하기 위한 2가지 방법
    **1. let** : 최초로 사용하는 변수명에 let 붙여 동일한 변수명 사용할 때 에러 발생시키기   
                 의도적으로 (let 없이) name = "Jane"; 입력하여 변수 내용을 변경할 수 있음
        <pre>
        <code>
            let name = "Mike";
            // 1000 lines..
            let name = "Jane";   // → console에 Uncaught SyntaxError 나옴   
        </code>
        </pre>
        <br>

    **2. const** : 절대로 바뀌지 않는 상수, 변경하려 하면 에러 발생, 주로 대문자로 기재   
       ex. PI, SPEED_LIMIT, BIRTH_DAY   

  * 결론, Javascript에서 변수를 선언할 때는   
    변하지 않는 값은 *const*, 변할 수 있는 값은 *let*으로 선언   
    tip) 우선 변수는 const로 선언 후 변경될 여지가 있으면 let으로 대체하기   
    <br>

- 변수로 접근   
  **1. alert()** : 경고창을 띄우는 함수   
  **2. console.log()** : 로그를 띄우는 함수   
  <pre>
  <code>
    name = "Mike";
    age = 30;

    alert(name);        → 경고창 'Mike' 활성화
    console.log(age);   → console에 30 출력
  </code>
  </pre>
  <br>

- 추가로 변수는...    
  문자, 숫자, $, _ 만 사용   
  첫글자에 숫자 사용불가   
  예약어 사용불가   
  가급적 상수(const)는 대문자로   
  변수명은 읽기 쉽고 이해할 수 있게 선언