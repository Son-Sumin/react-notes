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
        let msg = `Hello`;
        if(name) {
            msg += `, ` + name;
            // msg += `, ${name}`;
        }
        console.log(msg);
    }
    sayHello();              // 'Hello'
    sayHello('Mike');        // 'Hello, Mike'
    console.log(msg);        // Error → 함수 밖으로 빼면 사용 가능 → 전역변수


    매개변수 msg는 함수 내에서만 사용 가능하다, 즉 지역변수임
</code>
</pre>
<br>

