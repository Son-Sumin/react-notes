### 형 변환

- 명시적 형변환
  String() : 문자형으로 변환   
  Number() : 숫자형으로 변환 (입력받은 값이 문자형인 경우 자주 사용, 숫자와 문자가 합쳐진 경우 NaN 출력)   
  Boolean() : 불린형으로 변환   
   true : false 이외의 값   
   false : 숫자0, " (빈 문자열) ", null, undefined, NaN

- 자동 형변환   
  "9080"/2 = 4540  =>  9080/2 = 4540

- 형 변환이 필요한 이유 : prompt 입력받은 값은 문자형이다   
  문자형 + 문자형 → 이어서 보여줌    
  숫자형 + 숫자형 → 사칙연산 적용하여 보여줌   
  문자형 + 숫자형 → 문자형 + 문자형   

- 주의사항 :
  Number(null)       => 0  (prompt 취소 - null 반환 - 0)
  Number(undefined)  => NaN

  Boolean(0)       => false
  Boolean("0")     => true
  Boolean('')      => false
  Boolean(' ')     => true

<pre>
<code>
    /* 명시적 형변환 */
    // String()
    console.log(
        String(3), String(true), String(false),
        String(null), String(undefined)
    )
    // "3" "true" "false" "null" "undefined"

    // Number()
    console.log(
        Number("1234"), Number("123sfsdfsa4"),
        Number(true), Number(false)
    )
    // 1234 NaN 1 0

    // Boolean()
    console.log(
        Boolean(0), Boolean(""), Boolean(null),
        Boolean(undefined), Boolean(NaN)
    )
    // false
</code>
</pre>
<br>

<pre>
<code>
    /* 자동 형변환 */

    const mathScore = prompt("수학 점수?");      // 90 입력
    const engScore = prompt("영어 점수?");       // 80 입력
    const result = (mathScore + engScore) / 2   // "9080" / 2
    console.log(result);                        → 4540

    const mathScore = 90;
    const engScore = 80;
    const result = (mathScore + engScore) / 2   // 170 / 2
    console.log(result);                        → 85
</code>
</pre>
<br>