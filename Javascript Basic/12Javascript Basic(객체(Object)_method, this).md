### 객체(Object)_method, this

#### 객체(Object)
- Object - 생성, 접근, 추가, 삭제   
  const/let = {key1:value1(property1), key2:value2(property2), }
<pre>
<code>
    // 생성 //
    const superman = {
        name : 'clark',
        age : 33,
    }

    // 접근 //
    superman.name       // 'clark'
    superman.['age']    // 33

    // 추가 //
    superman.gender = 'male';
    superman.['hairColor'] = 'black';

    // 삭제 //
    delete superman.hairColor;
</code>
</pre>
<br>

- Object - 단축 property   
  property 이름 = 변수 이름 경우   
<pre>
<code>
    // 변수 name, age의 값
    const name : 'clark';
    const age : 33;

    // 객체 name에 변수 name이, 객체 age에 변수 age가 들어가 있음
    const superman = {
        name : name,
        age : age,
        gender : 'male',
    }

    const superman = {
        name,
        age,
        gender : 'male',
    }
</code>
</pre>
<br>

- Object - property 존재 여부 확인   
<pre>
<code>
    const superman = {
        name : 'clark',
        age : 33,
    }

    superman.birthDay;       // undefined (에러 발생X)
    'birthDay' in superman;  // false
    'age' in superman;       // true

    * in 연산자를 활용하여 해당 property 존재 여부 확인 가능   
      . 또는 [] 아닌 in은 어떤 값이 넘어올지 확신할 수 없을 때 사용
</code>
</pre>
<br>

- for ... in 반복문   
  객체 순회하며 값 획득 가능
<pre>
<code>
    for (let key in superman) {
        console.log(key)
        console.log(superman[key])
    }
</code>
</pre>
<br><br>


- 예제로 배워보기 1
<pre>
<code>
    // 객체 생성
    const superman = {
        name : 'clark',
        age : 30,
    }

    // 객체 접근, 추가, 삭제, 객체 자체 출력
    console.log(superman.name)          // 'clark'
    console.log(superman.['age'])       // 30
    superman.hairColor = 'black';
    superman.['hobby'] = 'football';
    delete superman.age;
    console.log(superman)               // Object {
                                                hairColor : "black",
                                                hobby : "football",
                                                name : "clark",
                                            }
</code>
</pre>
<br>

- 예제로 배워보기 2
<pre>
<code>
    // 이름과 나이를 받아서 객체를 반환하는 함수 만들기
    function makeObject(name, age) {
        return {
            name : name,    // name
            age : age,      // age
            hobby : 'football',
        }
    }
    const Mike = makeObject('Mike', 30);
    console.log(Mike)
    /* 
        Object {
            age: 30,
            hobby: "football",
            name: "Mike"
        }
     */

     // in 연산자 활용
     // . 또는 [] 사용하면 되니 실용적 예제는 아님
     console.log("age" in Mike)         // true
     console.log("birthday" in Mike)    // false
</code>
</pre>
<br>

- 예제로 배워보기 3
<pre>
<code>
    // 객체 in
    function isAdult(user){
        if(user.age < 20) {
            return false;
        } 
        return true;
    }

    const Mike = {
        name : 'Mike',
        age : 30,
    }

    const Jane = {
        name : 'Jane',
    }

    console.log(isAdult(Mike))      // true
    console.log(isAdult(Jane))      // true
                                    // Jane의 property 중 age가 존재하지 않아 if문은 항상 false이고, true가 반환됨 (if문 조건 추가)
</code>
</pre>
<br>