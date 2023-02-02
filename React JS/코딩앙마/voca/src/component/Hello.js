import World from "./World";

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World />
            <World />
        </div>
    );
}

// <div> 안에 2개의 태그 넣음  →  jsx는 1개의 태그만 생성 가능
// <div> 가 아닌 <> 빈 태그로 감싸도 됨