### 논리연산자

#### || (or), && (and), !(not)   
- || (or)  : 여러 개 중 하나라도 true면 true. 즉, 모든 값이 false일 때만 false   
- && (and) : 모든 값이 true면 true. 즉, 하나라도 false면 false   
- ! (not)   : true면 true, false면 false   
<br>

|| (or) 는 첫 번째 true를 발견하는 즉시 평가를 멈춤   
&& (and) 는 첫 번째 false 발견하는 즉시 평가를 멈춤   
<br>

- 논리연산자를 잘 활용하면 성능 최적화에 도움을 준다.   
  조건의 순서를 많이 거를 수 있는 것을 우선으로 두면 더욱 효율적으로 성능 활용 및 시간 단축이 가능하다.   
  예시) 운전면허가 있고 시력이 좋은 여군   
  -> 여군인데 시력이 좋고 운전면허가 있는 사람   

<pre>
<code>
    const name = "Mike";
    const age = 30;

    // || (or) //
    // 이름이 Tom이거나, 성인이면 통과
    if(name === 'Tom' || age > 19) {
        console.log('통과');
    }  // 통과


    // && (and) //
    // 이름이 Mike이고, 성인이면 통과
    if(name === 'Mike' && age > 19) {
        console.log('통과');
    } else {
        console.log('돌아가');
    }  // 통과


    // ! (not) //
    // 나이를 입력받아 성인 아니면 돌아가
    const age = prompt('나이는?');
    const isAdult = age > 19;

    if(!isAdult) {
        console.log('돌아가');
    }  // 10 입력 → 돌아가

</code>
</pre>
<br>

- 우선순위 : && > ||
<pre>
<code>
    // 우선순위 //
    // 남자이고, 이름이 Mike이거나 성인이면 통과

    const gender = 'F';
    const name = 'Jane';
    const isAdult = true;

    if(gender === 'M' && name ==='Mike' || isAdult) {
        console.log('통과');
    } else {
        console.log('돌아가');
    }  // 통과


    // 왜 통과일까?
    // &&보다 ||이 나중에 평가되어 맨 마지막 평가항목이 isAdult = true이기에 최종 출력이 true, 즉 통과로 출력


    if(gender === 'M' && (name ==='Mike' || isAdult)) {
        console.log('통과');
    } else {
        console.log('돌아가');
    }  // 돌아가
</code>
</pre>
<br>