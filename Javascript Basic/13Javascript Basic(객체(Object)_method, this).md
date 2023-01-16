### 객체(Object)_method, this

#### 객체(Object)_method
method : 객체 프로퍼티로 할당된 함수   
<pre>
<code>
const superman = {
    name : 'clark',
    age : 33,
    fly : function(){
        console.log('날아갑니다.')
    // 줄여쓰기 가능
    fly(){
        console.log('날아갑니다.')
    }
}
superman.fly();     // 날아갑니다.
</code>
</pre>
<br>

- 객체와 method의 관계   
  * this   
<pre>
<code>
const user = {
    name : 'Mike',
    sayHello : function(){
        console.log(`Hello, I'm ${this.name}`);
    }
}
user.sayHello();    // Hello, I'm Mike
                    // .sayHello 앞의 user는 위의 this가 됨
</code>
</pre>
<br>

  * this 예제   
  * 화살표함수는 일반함수와 달리 자신만의 this를 가지지 않음   
    화살표함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져옴   
<pre>
<code>
// this 예제 //
let boy = {
    name : 'Mike',
    sayHello,
}
let girl = {
    name : 'Jane',
    sayHello,
}
sayHello : function(){
    console.log(`Hello, I'm ${this.name}`);
}

// this는 runtime때 결정된다
boy.sayHello();     // I'm Mike
girl.sayHello();    // I'm Jane


// 만일 sayHello를 화살표함수로 표현하면 결과가 완전히 달라진다.
let boy = {
    name : 'Mike',
    sayHello : () => {
    console.log(this);      // this = 전역객체
    }
}
boy.sayHello();             // this != boy

** 전역객체 this
 - 브라우저 환경 : window
 - Node js : global
</code>
</pre>
<br>

- 예제로 배워보기 1
  method의 this는 해당 객체를 가리킴   
  method에서 객체명을 직접 활용하는 것보다 this를 활용하는 것이 좋음   
<pre>
<code>
    // method
    let boy = {
        name : "Mike",
        showName : function() {     // method의 this는 해당 객체를 가리킴
            console.log(this.name)  // method에서 객체명을 직접 활용하는 것보다 this를 활용하는 것이 좋음
        }
    };

    boy.showName();     // "Mike"

    let man = boy;      // boy와 man 2가지로 접근 가능해짐
    man.showName();     // "Mike"

    // man.name = "Tom"
    // boy.showName();     // "Tom"

    boy = null;
    man.showName();     // 에러 발생  →  boy.name => this.name      // "Mike"
</code>
</pre>
<br>

- 예제로 배워보기 2
<pre>
<code>
    // method
    let boy = {
        name : "Mike",
        sayThis : function() {
            console.log(this)       // this는 boy 객체 의미함
        }
    };

    boy.sayThis();
    /*
    Object {
        name: "Mike",
        sayThis: function() {↔}
    }
    */

</code>
</pre>
<br>