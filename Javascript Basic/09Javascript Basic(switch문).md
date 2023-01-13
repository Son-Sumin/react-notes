### Switch   
모든 switch문은 if ~ else문으로 작성 가능함   
근데 사용하는 이유는, case가 다양하다면 좀 더 간결하게 작성 가능하다는 장점이 있음   

<pre>
<code>
    // 동일한 코드

    // 1
    switch(평가) {
        case A :
        // A일 때 코드
        case B :
        // B일 때 코드
    }

    // 2
    if(평가 == A) {
        // A일 때 코드
    } else if(평가 == B) {
        // B일 때 코드
    } 
</code>
</pre>
<br>

<pre>
<code>
    /*
        사과 : 100원
        바나나 : 200원
        키위 : 300원
        멜론 : 500원
        수박 : 500원
        사고 싶은 과일 물어보면 가격 알려주기
    */

    let fruit = prompt('무슨 과일이 사고 싶나요?');

    switch(fruit) {
        case '사과' :
            console.log('100원입니다.')';
            break;
        case '바나나' :
            console.log('200원입니다.')';
            break;
        case '키위' :
            console.log('300원입니다.')';
            break;
        case '멜론' :
        case '수박' :
            console.log('500원입니다.')';
            break;
        default :
            console.log('그런 과일은 없습니다.')';
    }

    // 각 case마다 break를 넣어주지 않으면
       예를 들어, '바나나' 입력 시 200 300 500 500 출력됨
       switch문의 case은 true를 만나면 그 이후의 모든 것을 다 실행함!!
       
       또한 case 외의 답변을 입력했을 경우 대비 defalut 기재
</code>
</pre>
<br>