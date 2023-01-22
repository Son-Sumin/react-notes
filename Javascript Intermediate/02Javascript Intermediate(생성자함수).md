### 생성자 함수

#### 생성자 함수와 객체 리터럴
비슷한 객체 리터럴을 여러 개 만들어야할 때 생성사 함수 활용   
생성자 함수는 보통 첫 글자를 대문자로 표기   
<pre>
<code>
    /* 객체 리터널 */
    let user = {
        name : 'Mike',
        age : 30,
    }


    /* 생성자 함수 */
    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    // new 연산자를 사용하여 함수 호출 (각각 다른 변수명, 값)
    let user1 = new User('Mike', 30);   → User {name: "Mike", age: 30}
    let user2 = new User('Jane', 22);   → User {name: "Jane", age: 22}
    let user3 = new User('Tom', 17);    → User {name: "Tom", age: 17}
</code>
</pre>
<br>