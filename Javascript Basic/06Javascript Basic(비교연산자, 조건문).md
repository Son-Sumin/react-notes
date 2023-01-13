### 비교연산자, 조건문

#### 비교연산자
<  >  <=  >=  ==(동등연사자) ===(일치연산자) !=   

- 비교연산자를 사용하면 값을 반환한다  => true / false
<pre>
<code>
    console.log(10>5);     // true
    console.log(10 == 5);  // false
    console.log(10 != 5);  // true

    const a = 1;
    const b = "1";
    console.log(a == b);    // true  // 값 비교
    console.log(a === b);   // false // 값, 타입 비교  =>  ==보다 추천
</code>
</pre>
<br>


#### 조건문   
if() : () 내용을 boolean형으로 판단하여 true이면 실행시킴   
else : if()의 () 내용이 false이면 실행시킴   

<pre>
<code>
    const age = 10;
    
    if(age > 19) {
        console.log('환영합니다');
    } else if(age === 19) {
        console.log('수능 화이팅');
    } else {
        console.log('안녕히가세요');
    }
</code>
</pre>
<br>
