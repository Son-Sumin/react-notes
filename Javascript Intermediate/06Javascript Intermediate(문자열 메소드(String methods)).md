## 문자열 메소드(String methods)
해당 chapter에서 배우는 내용   
- length   
- 특정 위치에 접근 가능   
- toUpperCase() / toLowerCase()    
- str.indexOf(text), str.slice(n, m), str.substring(n, m), str.substr(n, m)   
- str.trim(), str.repeat(), str.includes()   
- 문자열 비교 가능 (codePointAt(), fromCodePoint())   
<br>

* * *

### # ''    ""    ``
- '' : html 내용을 감싸는 것이 편하다, 태그 내용을 "로 감싸는 경우가 있으므로   
여려줄 표현시 \n 사용해야 하며, 한 줄로 표현해야함(줄바꿈 X)   
- "" : 영어 문장을 감싸는 것이 편하다, It's 등이 있으므로   
여려줄 표현시 \n 사용해야 하며, 한 줄로 표현해야함(줄바꿈 X)   
- `` : $ {변수}, $ {표현식} 활용 가능, 여러줄 표현 가능   
<br><br>

- length : 문자열 길이    
  예시) 회원가입 시 아이디 및 비밀번호 입력 문자열 길이 제한 시 사용   
- 특정 위치에 접근 가능   
  배열과 같이 index는 0부터 시작함   
  하지만 배열과 다르게 한 글자만 바꾸는 것 불가
```
// length : 문자열 길이
let desc = '안녕하세요.';
desc.length     // 6


// 특정 위치에 접근 가능
let desc = '안녕하세요.';

desc[2]                 // '하'
desc[4] = '용';
console.log(desc);      // "안녕하세요." (바뀌지 않음)
```
<br>

- toUpperCase() / toLowerCase()   
```
let desc = "Hi guys. Nice to meet you.";

desc.toUpperCase();     // "HI GUYS. NICE TO MEET YOU."
desc.toLowerCase();     // "hi guys. nice to meet you."
```
<br>

- str.indexOf(text)
  * 문자를 인수로 받아 몇 번째 위치하는지 알려줌   
  * 0부터 카운팅하며 띄어쓰기도 포함함   
  * 해당 문자 없으면 -1 반환함   
  * 포함된 문자가 여러 개여도 첫 번째 문자의 위치만 반환함   
  * if문에서 사용시 주의 (조건문에 '> -1' 꼭 붙이기)
```
let desc = "Hi guys. Nice to meet you.";

desc.indexOf('to');     // 14
desc.indexOf('man');    // -1

// desc.indexOf('Hi') = 0  →  조건문 = 0이면 false이므로 '> -1' 꼭 붙이기 
if(desc.indexOf('Hi') > -1) {
    console.log('Hi가 포함된 문장입니다.');
}
```
<br>

- str.slice(n, m)   
  * n ~ m-1 까지의 문자열만 뽑기
  * m : 없으면 문자열 끝까지, 양수면 m-1까지, 음수면 끝에서 m번째 위치까지   
- str.substring(n, m)   
  * n ~ m-1 까지 사이의 문자열만 뽑기   
  * n과 m을 바꿔도 동작함   
  * 음수는 0으로 인식   
- str.substr(n, m)   
  * n부터 시작하여 m개를 가져옴   
  * n < 0 이면 마지막 n개에서 m개 가져옴     
```
let desc = "abcdefg";

desc.slice(2);          // "cdefg"
desc.slice(0, 5);       // "abcde"
desc.slice(2, -2);      // "cde"

desc.substring(2, 5);      // "cde"
desc.substring(5, 2);      // "cde"

desc.substr(2, 4);      // "cdef"
desc.substr(-4, 2);      // "de"
```
<br>

- str.trim() : 앞 뒤 공백 제거   
- str.repeat(n) : n번 문자열 반복   
- str.includes : 문자가 있으면 true, 없으면 false 반환
```
let desc = "     coding            ";
desc.trim();          // "coding"

let hello = "hello!";
hello.repeat(3);          // "hello!hello!hello!"
```
<br>

- 문자열 비교 가능 (아스키 코드표 참고)   
  * 문자에서 숫자 코드번호 얻기 : "a".codePointAt(0);   
  * 숫자 코드번호에서 문자 얻기 : String.fromCodePoint(97);

```
1 < 3       // true
"a" < "c"   // true

"a".codePointAt(0);         // 97
String.fromCodePoint(97);   // "a"
```
<br>

- 예제로 배워보기 1 (slice)   
```
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
]

let newList = [];

for(let i=0; i < list.length; i++){
    newList.push(
        list[i].slice(4);
    );
}
console.log(newList);
// ["들어가며", "JS의 역사", "자료형", "함수", "배열"]
```
<br>

- 예제로 배워보기 2 (indexOf)   
```
// 금칙어 : 콜라 

function hasCola(str) {
    if(str.indexOf('콜라') > -1){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}

// > -1 적용 전 
hasCola('사이다 짱!');       // -1 → true, 금칙어가 있습니다.
hasCola('풋 콜라 최고');     // 금칙어가 있습니다.
hasCola('콜라');             // 0 → false, 통과

// > -1 적용 전 
hasCola('사이다 짱!');       // -1 → false, 통과
hasCola('풋 콜라 최고');     // 금칙어가 있습니다.
hasCola('콜라');             // 0 → true, 금칙어가 있습니다.
```
<br>

- 예제로 배워보기 3 (includes)   
```
// 금칙어 : 콜라 

function hasCola(str) {
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}

hasCola('사이다 짱!');       // 통과
hasCola('풋 콜라 최고');     // 금칙어가 있습니다.
hasCola('콜라');             // 금칙어가 있습니다.
```