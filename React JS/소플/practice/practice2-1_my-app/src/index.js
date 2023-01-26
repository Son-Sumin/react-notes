import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

// chapter_03
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// chapter_04
setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
수정 및 추가
- chapter_03
import Library from './chapter_03/Library';
<Library />

수정한 내용은,
Library 컴포넌트를 가져온 뒤에 리액트 DOM을 사용하여 Root DOM에 렌더링하도록 하는 코드

- chapter_04
setInterval() 함수를 이용해서 1000밀리세컨마다 새롭게 Clock 컴포넌트를 root div에 렌더링하는 코드
매초 Clock 컴포넌트의 엘리먼트가 새롭게 생성될 것임
*/
