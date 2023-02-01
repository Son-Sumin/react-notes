## #2 설치(create-react-app)

- cmd 실행 후 프로젝트 설치할 곳에 가서 아래 코드 실행   
  * npx create-react-app voca   
    'voca'라는 이름의 리액트 폴더 생성   
    (npx : npm이 올라간 패키지를 바로 실행해서 설치시켜주는 도구)   
  * npm start   
    리액트 시작   
  * package.jsondp "script"에 명령어 명시   
    * start : 개발 모드로 프로그램 실행   
    * build : 실제 배포모드로 만들어줌   
    * test : test 실행   
    * eject : 내부 설정 꺼냄 (webpack, babel 설정 변경 시 사용)
  <br>

- 실습 파일 : voca   
  * node_modules : 패키지를 실행할 때 필요한 dependencies 모듈들이 있음   
  * package.json : dependencies 기록되어 있음   
    (node_modules을 지워도 package.json을 수정하지만 않으면 npm install 시 그대로 설치 가능)   
    (git에 node_modules 올리지 않아도 package.json 확인하면 동일한 개발환경 구축 가능)
  * public > index.html : <div id="root"></div> 밑으로 리액트 코드가 실행되서 만들어진 DOM이 구현됨   
  * src > index.js : document.getElementById('root') 의 <App />을 ReactDOM.render 시켜준다고 이해하기 (위의 'root'와 동일)   
  * App.js : 코드 구현하기   
    <br>

- HMR(Hot Module Replacement) : App.js에서 작성/수정 후 저장 시 브라우저에 바로 반영됨   
