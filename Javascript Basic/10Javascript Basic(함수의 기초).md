### 함수(Function)   
장점 : 재활용 가능, 유지보수 용이   
참고) 브라우저의 내장함수 : console, alert, confirm

<pre>
<code>
    // 매개변수 없는 함수 //

    function showError() {
        alert('에러 발생, 다시 시도해주세요.');
    }
    showError();


    // 매개변수 있는 함수1 //

    function sayHello(name) {
        const msg = `Hello, ${name}`;
        console.log(msg);
    }
    sayHello('Mike');         // 'Hello Mike'


    // 매개변수 있는 함수2 //
    function sayHello(name) {
        console.log(name);    // undefined → false
        let msg = `Hello`;    // const → let (변수가 바뀔 수 있으니 바꿈)
        if(name) {
            msg += `, ` + name;
            // msg += `, ${name}`;
        }
        console.log(msg);
    }
    sayHello();              // 'Hello'
    sayHello('Mike');        // 'Hello, Mike'
    console.log(msg);        // Error


    매개변수 msg는 함수 내에서만 사용 가능하다, 이를 지역변수라고 함
    지역변수를 함수 외부로 빼면 함수 밖에서도 사용 가능, 이를 전역변수라고 함
</code>
</pre>
<br>

<pre>
<code>
    // 전역변수와 지역변수 //
    let msg = "welcome";    // 전역변수

    
</code>
</pre>
<br>