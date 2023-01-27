import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;

// useCounter Hook을 사용하는 Accommodate라는 리액트 함수 컴포넌트 만들기
// 사람을 수용하는 시설에서 사용한다 가정
// Accommodate 리액트 함수 컴포넌트는 useCounter Hook을 사용하여 count 관리
// count 수가 최대 count인 MAX_CAPACITY를 초과하면 경고문구 표시, 더이상 입장 불가
// useEffect Hook의 작동방식을 확인하기 위해 2가지 사용함
// 하나는 의존성 배열이 없는 형태, 하나는 의존성 배열이 있는 형태
// 의존성 배열이 없는 useEffect Hook은 count가 마운특된 직후에 호출되며 이후 컴포넌트가 업데이트될 때마다 호출됨
// 의존성 배열이 있는 useEffect Hook은 컴포넌트가 마운트된 직후에 출되며 이후 컴포넌트가 업데이트될 때마다 호출되는데
// 이때 용량의 수용 상태를 isFulll state에 저장한다