import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {

  return (
    <div className="App">
      <Hello />
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;

// js 파일 생성 후 함수를 만들고, export 해주면 간단히 컴포넌트 생성 가능
// 컴포넌트는 항상 대문자로 시작
// 한 번 만든 컴포넌트는 어디에든, 몇 번이든 재사용 가능
