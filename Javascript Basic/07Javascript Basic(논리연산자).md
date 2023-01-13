### 논리연산자

#### || (or), && (and), !(not)   
|| (or)  : 여러 개 중 하나라도 true면 true   
           즉, 모든 값이 false일 때만 false   
&& (and) : 모든 값이 true면 true   
           즉, 하나라도 false면 false   
!(not)   : true면 true, false면 false   
<br>

||(or) 는 첫 번째 true를 발견하는 즉시 평가를 멈춤   
&&(and) 는 첫 번째 false 발견하는 즉시 평가를 멈춤   
<br>

- 논리연산자를 잘 활용하면 성능 최적화에 도움을 준다
  예시) 운전면허가 있고 시력이 좋은 여군   
  -> 여군인데 시력이 좋고 운전면허가 있는 사람