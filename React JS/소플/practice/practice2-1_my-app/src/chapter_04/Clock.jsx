import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocalTimeString()}</h2>
        </div>
    );
}

export default Clock;

// Clock 컴포넌트 생성 후 index.js 수정