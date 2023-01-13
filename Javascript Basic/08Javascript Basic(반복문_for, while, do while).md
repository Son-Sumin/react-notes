### 반복문(Loop)   
조건 = false  →  반복문 빠져나옴

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


#### break, continue
- break : 멈추고 빠져나옴
- continue : 멈추고 빠져나옴