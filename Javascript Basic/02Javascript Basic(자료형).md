### 자료형

#### 1. 문자형 String
표현방법: "" / '' / ``   

<pre>
<code>
    const name = "Mike";
    const age = 30;

    const name1 = "Mike";
    const name2 = 'Mike';
    const name3 = `Mike`;

    const message1 = "I'm a boy.";
    const message2 = 'I\'m a boy.';             // ''만 사용하고 싶을 때 \' 사용

    const message3 = `My name is ${name}`;      // `` ${변수명} 사용할 때 편리, '' "" 사용시 My name is ${name} 출력
    console.log(message3);  → My name is Mike

    const message4 = `나는 ${30+1}살 입니다.`;  // ${표현식} 사용 가능
    console.log(message4);  → 나는 31살 입니다.

    const a = "나는";
    const b = "입니다.";
    const name = "Mike";
    console.log(a + name + b);      → "나는 Mike 입니다."

    const a = "나는";
    const b = "입니다.";
    const age = 30;
    console.log(a + age + "살" + b);      → "나는 30살 입니다."   // 이때 숫자30은 문자형으로 변환됨
</code>
</pre>
<br><br>    

#### 2. 숫자형 Number   
사칙연산 가능
<pre>
<code>
    const age = 30;
    const PI = 3.14;

    console.log(1 + 2);
    console.log(10 - 3);
    console.log(3 * 2);
    console.log(6 / 3);
    console.log(6 % 4);     // 나머지

    const x = 1/0;  → Infinity

    const name = "Mike";
    const y = name/2;  → Nan : not a number
</code>
</pre>
<br><br>    

#### 3. 논리형 Boolean   
사칙연산 가능
<pre>
<code>
    const a = true;
    const b = false;

    const name = "Mike";
    const age = 30;

    console.log(name == 'Mike')     → true
    console.log(age > 40)           → false
</code>
</pre>
<br><br>    

#### 4. null undefined   
null : 존재하지 않는 값   
undefined : 값이 할당되지 않음
<pre>
<code>
    let age;
    console.log(age)     → undefined

    let user = null;     // user가 존재하지 않는다고 이해하기
</code>
</pre>
<br><br> 

#### 5. typeof 연산자   
변수의 자료형을 알 수 있음   
**주의** null != 객체 임을 인지! => JS 초기ver 오류, 호환성 위해 수정X   
<pre>
<code>
    const name = "Mike";

    console.log(typeof 3);          → "number"
    console.log(typeof name);       → "string"
    console.log(typeof true);       → "boolean"
    console.log(typeof "xxx");      → "string"
    console.log(typeof null);       → "object" (객체형)
    console.log(typeof undefined);  → "undefined"
</code>
</pre>
<br><br>
