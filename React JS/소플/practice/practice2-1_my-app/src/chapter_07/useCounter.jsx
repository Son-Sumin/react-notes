import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1 );
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;

// useCounter라는 리액트 Hook 생성
// useCounter Hook은 초기 count 값을 파라미터로 받아 count라는 이름의 state를 생성하여 값을 제공하고
// count 증감을 편리하게 할 수 있도록 함수를 제공함
// useCounter Hook을 사용하면 어떤 함수 컴포넌트에서든 count 기능을 쉽게 사용할 수 있다