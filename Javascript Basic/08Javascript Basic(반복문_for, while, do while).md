### 반복문(Loop)   
조건 = false  →  반복문 빠져나옴   
명확한 횟수가 정해져 있으면 for문, 그렇지 않으면 while문 (do.. while은 잘 사용하지 않음)   

#### 1. for   
for(초기값; 조건; 코드 실행 후 작업) {반복할 코드}   

<pre>
<code>
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }  // 0, ..., 9
</code>
</pre>
<br>

#### 2. while   
초기값;   
while(초기값; 조건; 코드 실행 후 작업) {반복할 코드}   

<pre>
<code>
    let i = 0;
    while(i < 10) {
        console.log(i);
        i++;
    }  // 0, ..., 9
</code>
</pre>
<br>

#### 3. do.. while   
초기값;   
do {코드}   
while(조건)    

<pre>
<code>
    let i = 0;
    do {
        console.log(i);
        i++;
    } while(i < 10)
    // 0, ..., 9
</code>
</pre>
<br>

**while과 do.. while 차이점**   
while : while(조건)이 부합하면 do(코드) 실행
do.. while : do(코드)를 실행 후 while(조건)체크. 즉, do(코드)를 적어도 1번은 실행함   
<br>


#### 4. break, continue
- break : 해당 코드 실행을 멈추고 반복문 빠져나옴   
- continue : 해당 코드 실행을 멈추고 다음 반복으로 점프하여 진행

<pre>
<code>
    // break //   
    // 참고 : while(true){} 는 true이면 무한 반복됨 → break 걸어주는 것이 중요함   
    while(true) {
        let answer = confirm('계속할까요?');   // 확인(true), 취소(false)
        if(!answer) {
            break;
        }
    }


    // coontinue //   
    // 짝수만 출력
    // if 조건문이 true이면 {코드} 실행됨
       0(false)이면 continue을 만나지 않고, console 실행
       1(true)이면 continue을 만나 i+1로 다시 돌아가 실행
    for(let i = 0; i < 10; i++>) {
        if(i%2) {
            continue;
        }
        console.log(i)
    }
</code>
</pre>
<br>