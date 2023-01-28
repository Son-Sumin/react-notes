### 배열(Array)
순서가 있는 리스트   
index가 존재하면 0부터 시작함   
ex) let students = ['철수', '영희', ..., '영수'];   

#### 배열의 특징   
1. 배열은 문자, 숫자, 불린, 객체, 함수 등도 포함할 수 있음   
``` Javascript
let arr = [
    '민수',
    3,
    false,
    {
        name : 'Mike',
        age : 30
    },
    function(){
        console.log('TEST');
    }
];
```
<br>

2. length : 배열의 길이, 그 배열이 갖고 있는 요소 수 반환   
3. 배열이 갖고 있는 method   
  > push(..) : 배열 끝에 요소 추가, 여러 요소 한 번에 추가 가능   
  > pop() : 배열 끝 요소 제거   
  > unshift(..) : 배열 앞에 추가, 여러 요소 한 번에 추가 가능   
  > shift() : 배열 앞에 제거   
4. 반복문 for, 반복문 for ... of : 배열을 쓰는 가장 큰 이유   
   length를 통해 배열의 길이를 알 수 있으므로 for문 사용 가능   
   for ... of 가 for문보다 간단하지만 index를 못 얻는다는 단점이 있다   
``` Javascript
// 반복문 for//

let days = ['월', '화', '수'];

for (let index = 0; index < days.length; index++){
    console.log(days[index])
}


// 반복문 for ... of //
// for문보다 간단하지만 index를 못 얻는다는 단점이 있다
let days = ['월', '화', '수'];

for (let day of days){
    console.log(day)
}
```
<br>

- 예제로 배워보기   
``` Javascript
 // array

 let days = ["mon", "tue", "wed"];

 console.log(days[1]);      // "tue"

 days[1] = "화요일";
 console.log(days);         // ["mon", "화요일", "wed"]

 console.log(days.length);  // 3

 days.push("thu");
 dats.unshift("sun");
 console.log(days);         // ["sun", "mon", "화요일", "wed", "thu"]


 // array - for문

 let days = ["mon", "tue", "wed"];

 days.push("thu");
 days.unshift("sun");

 for(let index=0; index < days.length; index++) {
    console.log(days[index]);
 }      // "sun" "mon" "tue" "wed" "thu"


  // array - for ... of

 let days = ["mon", "tue", "wed"];

 days.push("thu");
 days.unshift("sun");

 for(let day of days) {
    console.log(days);
 }      // "sun" "mon" "tue" "wed" "thu"
```
<br>