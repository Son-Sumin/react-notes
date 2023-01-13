### 연산자(Operators)

#### 나머지(%) 사용처
- 홀짝 구분   
  홀수 : X % 2 = 1   
  짝수 : Y % 2 = 0   

- 특정 수보다 작은 수 구하기   
  특정 수를 5라고 하면   
  X % 5 = 0  => 0~4 값만 반환   

#### 거듭제곱
<pre>
<code>
    const num = 2**3;   
    console.log(num);  // 8   
</code>
</pre>
<br>

#### 연산자 우선순위
* /  >  + -
연산자 줄여쓰기 가능
<pre>
<code>
    let num = 10;
    num = num + 5;
    console.log(num);  // 15

    num += 5;  // 15
    num *= 5;  // 50
    num -= 5;  // 5
    num %= 5;  // 0
</code>
</pre>
<br>

#### 증가연산자(+1), 감소연산자(-1)
<pre>
<code>
    let num = 10;
    
    num++;
    console.log(num);  // 11

    num--;
    console.log(num);  // 9

    let result1 = num++;
    onsole.log(result1);  // 10     => 값을 넣고 +1

    let result2 = ++num;
    onsole.log(result2);  // 11     => +1 후 값 넣기

    let result3 = num--;
    onsole.log(result3);  // 10

    let result4 = --num;
    onsole.log(result4);  // 9
</code>
</pre>
<br>