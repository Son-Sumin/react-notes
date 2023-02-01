import './App.css';

function App() {
  const name = "Tom";
  const naver = {
    name: "네이버",
    url: "https://www.naver.com/"
  }

  return (
    <div className="App">
      <h1 style={{
          color : '#ff0',
          backgroundColor : 'green',
        }}> 
          Hello, {name}~
          <p>{2+3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;


// <h1 style{}>은 객체로 부여, color:'문자열'로 작성
// {} 내부에 변수, 문자형, 숫자형 사용 가능 / 불린형, 객체 사용 불가능
/*
  const user = { name: "Jane", } 작성 후
  div h1 내용으로 <p>{user}</p> 넣으면 브라우저에 출력 X
*/