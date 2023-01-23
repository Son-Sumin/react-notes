## 문자열 메소드(String methods)
해당 chapter에서 배우는 내용   
- length   
- 특정 위치에 접근 가능   
- toUpperCase() / toLowerCase()    
- str.indexOf(text), str.slice(n, m)   

### # ''    ""    ``
- '' : html 내용을 감싸는 것이 편하다, 태그 내용을 "로 감싸는 경우가 있으므로   
여려줄 표현시 \n 사용해야 하며, 한 줄로 표현해야함(줄바꿈 X)   
- "" : 영어 문장을 감싸는 것이 편하다, It's 등이 있으므로   
여려줄 표현시 \n 사용해야 하며, 한 줄로 표현해야함(줄바꿈 X)   
- `` : $ {변수}, $ {표현식} 활용 가능, 여러줄 표현 가능   
<br>

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
```
let desc = "abcdefg";

desc.slice(2);          // "cdefg"
desc.slice(0, 5);       // "abcde"
desc.slice(2, -2);      // "cde"
```
<br>
