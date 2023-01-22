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
        console.log(name);    // (확인용) undefined → false
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


    * 매개변수 msg는 함수 내에서만 사용 가능하다, 이를 지역변수라고 함
    * 지역변수를 함수 외부로 빼면 함수 밖에서도 사용 가능, 이를 전역변수라고 함
</code>
</pre>
<br>

<pre>
<code>
    // 전역변수와 지역변수 예시1 //
    * 전역변수와 지역변수는 서로 간섭받지 않는다.
    let msg = "welcome";    // 전역변수
    console.log(msg);       // "welcome"

    function sayHello(name) {
        let msg = "Hello";  // 지역변수
        console.log(msg + ' ' + name);
    }
    sayHello('Mike');       // "Hello Mike"
    console.log(msg);       // "welcome"
</code>
</pre>
<br>

<pre>
<code>
    // 전역변수와 지역변수 예시2 //
    let name = "Mike";      // 전역변수

    function sayHello(name) {
        console.log(name);  // 이때 매개변수 name은 전역변수를 복사된 후 지역변수가 된다
    }
    sayHello();             // undefined
    sayHello('Jane');       // "Jane"
</code>
</pre>
<br>

- 전역변수가 많아지면 관리가 힘들어지니, 함수에 특화된 지역변수를 가급적 사용하자

<pre>
<code>
    // 함수 더 알아보기 //

    // OR //
    function sayHello(name) {
        let newName = name || 'friend';
        let msg = `Hello, ${newName}`
        console.log(msg);\
    }
    sayHello();             // "Hello, friend"
    sayHello('Jane');       // "Hello, Jane"


    // default value //
    function sayHello(name = 'friend') {  // name의 default value는 friend
        let msg = `Hello, ${name}`
        console.log(msg);\
    }
    sayHello();             // "Hello, friend"
    sayHello('Jane');       // "Hello, Jane"


    // return으로 값 반환 1 //
    function add(num1, num2) {
        return num1 + num2;
    }
    const result = add(2, 3);
    console.log(result)     // 5


    // return으로 값 반환 2 //
     * return문이 없어도 undefined 반환한다
     * return; 은 그 즉시 코드를 종료시키고, undefined 반환한다
    function showError() {
        alert('에러가 발생했습니다.');
        return;
        alert('이 코드는 절대 실행되지 않습니다.');
    }
    const result = showError(); // alert창 활성화됨
    console.log(result)         // undefined
</code>
</pre>
<br>

- 함수 사용 팁   
1. 한번에 한 작업만 (하나의 함수가 여러가지 기능을 하지 않도록 잘게 나누기)   
2. 변수와 같이 함수도 어떤 동작인지 알 수 있도록 네이밍하기   
ex) showError, getName, createUserData, checkLogin
